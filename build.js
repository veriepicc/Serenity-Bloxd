const esbuild = require('esbuild');
const stylePlugin = require('esbuild-style-plugin');
const fs = require('fs');
const path = require('path');
const packageJson = require('./package.json');

const isWatch = process.argv.includes('--watch');

const outdir = 'dist';
// Ensure the output directory exists
if (!fs.existsSync(outdir)) {
    fs.mkdirSync(outdir);
}
const jsOutfile = path.join(outdir, 'Serenity.js');
const cssOutfile = path.join(outdir, 'Serenity.css');

// Custom esbuild plugin to inject the CSS into the JS bundle
const cssInjectorPlugin = {
    name: 'css-injector',
    setup(build) {
        build.onEnd(result => {
            if (result.errors.length > 0) {
                console.log('Build failed, skipping CSS injection.');
                return;
            }

            if (!fs.existsSync(cssOutfile)) {
                // This can happen on the first run in watch mode if there's no CSS yet.
                return;
            }

            const jsContent = fs.readFileSync(jsOutfile, 'utf8');

            // Check if CSS has already been injected to avoid duplication in watch mode
            if (jsContent.includes('/* SERENITY_CSS_INJECTION */')) {
                return;
            }
            
            const cssContent = fs.readFileSync(cssOutfile, 'utf8');
            const escapedCss = cssContent.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');

            const injectionCode = `
// ==UserScript==
// @name         Serenity Client
// @version      ${packageJson.version}
// @description  A feature-rich client for Bloxd.io
// @author       Serenity Development
// @match        *://*.bloxd.io/*
// @downloadURL  https://raw.githubusercontent.com/veriepicc/Serenity-Bloxd/main/dist/Serenity.js
// @updateURL    https://raw.githubusercontent.com/veriepicc/Serenity-Bloxd/main/dist/Serenity.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

/* SERENITY_CSS_INJECTION */
(function() {
    'use strict';
    const css = \`${escapedCss}\`;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
})();

`;

            // Prepend the injection code and userscript header
            fs.writeFileSync(jsOutfile, injectionCode + jsContent);
            
            // Clean up the temporary CSS file
            fs.unlinkSync(cssOutfile);

            console.log('CSS successfully injected into JavaScript bundle.');
        });
    },
};

const config = {
    entryPoints: ['src/index.js'],
    outfile: jsOutfile,
    bundle: true,
    minify: !isWatch,
    sourcemap: isWatch ? 'inline' : false,
    drop: isWatch ? [] : ['console'],
    plugins: [
        stylePlugin(),
        cssInjectorPlugin
    ],
};

(async () => {
    if (isWatch) {
        let ctx = await esbuild.context(config);
        await ctx.watch();
        console.log("Watching for changes...");
    } else {
        await esbuild.build(config);
        console.log("Build finished.");
    }
})().catch(err => {
    console.error(err);
    process.exit(1);
}); 