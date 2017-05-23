import path from 'path';
import webpack from 'webpack';

import postcssFocus from 'postcss-focus';
import postcssCssNext from 'postcss-cssnext';
import postcssReporter from 'postcss-reporter';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ManifestPlugin from 'webpack-manifest-plugin';


const config = require('./base.config')({
    // Don't attempt to continue if there are any errors.
    bail: true,
    // We generate sourcemaps in production. This is slow but gives good results.
    // You can exclude the *.map files from the build during deployment.
    devtool: 'source-map',
    entry: [
        'whatwg-fetch',
        'babel-polyfill', // Possible fix for IE 11 render error
        path.join(process.cwd(), 'src/js/main.js')
    ],

    output: {
        publicPath: './'
    },

    postcssPlugins: [
        postcssFocus(),
        postcssCssNext({
            browsers: ['last 2 versions', 'IE > 9']
        }),
        postcssReporter({
            clearMessages: true
        })
    ],

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.DedupePlugin(),
        // new BundleAnalyzerPlugin(),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb/),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true
            },
            mangle: {
                screw_ie8: true
            },
            output: {
                comments: false,
                screw_ie8: true
            }
        }),
        new ManifestPlugin({
            fileName: 'asset-manifest.json'
        }),

    ],
    // Some libraries import Node modules but don't use them in the browser.
    // Make webpack provide empty mocks for them
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
});

module.exports = config;
