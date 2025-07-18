const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'Serenity.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `// ==UserScript==
// @name         Serenity
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  serenity
// @author       veriepicc
// @grant        none
// ==/UserScript==`,
      raw: true,
    }),
  ],
  mode: 'development',
}; 