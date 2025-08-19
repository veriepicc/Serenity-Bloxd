const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const packageJson = require('./package.json');

const isWatch = process.argv.includes('--watch');
const isProduction = !isWatch;

const outdir = 'dist';
if (!fs.existsSync(outdir)) {
    fs.mkdirSync(outdir);
}

const outfile = path.join(outdir, 'Serenity.js');

const userscriptHeader = `
// ==UserScript==
// @name         Serenity Client
// @version      ${packageJson.version}
// @description  A feature-rich client for Bloxd.io
// @author       Serenity Development
// @icon         https://i.postimg.cc/kXhHTk5q/lol3.jpg
// @match        *://*.bloxd.io/*
// @match        *://*.bloxdhop.io/*
// @match        *://*.bloxdk12.com/*
// @match        *://*.doodlecube.io/*
// @match        *://*.eviltower.io/*
// @match        *://1219647973806571553.discordsays.com/*
// @downloadURL  https://raw.githubusercontent.com/veriepicc/Serenity-Bloxd/main/dist/Serenity.js
// @updateURL    https://raw.githubusercontent.com/veriepicc/Serenity-Bloxd/main/dist/Serenity.js
// @grant        none
// @run-at       document-start
// ==/UserScript==
`;

const config = {
    entryPoints: ['src/index.js'],
    outfile,
    bundle: true,
    minify: isProduction,
    sourcemap: isProduction ? false : 'inline',
    drop: isProduction ? ['console'] : [],
    define: {
        'process.env.NODE_ENV': isProduction ? '"production"' : '"development"',
    },
    loader: { '.css': 'text' },
    banner: {
        js: userscriptHeader
    }
};

(async () => {
    const builder = async () => {
        try {
            await esbuild.build(config);
            console.log(isWatch ? "Watching for changes..." : "Build finished.");
        } catch (err) {
            console.error(err);
            if (!isWatch) {
                process.exit(1);
            }
        }
    };

    if (isWatch) {
        let ctx = await esbuild.context(config);
        await ctx.watch();
    } else {
        await builder();
    }
})().catch(err => {
    console.error(err);
    process.exit(1);
}); 
