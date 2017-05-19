import path from 'path';
import webpack from 'webpack';

import postcssFocus from 'postcss-focus';
import postcssCssNext from 'postcss-cssnext';
import postcssReporter from 'postcss-reporter';


const config = require('./base.config')({
    entry: [
        'whatwg-fetch',
        'babel-polyfill', // Possible fix for IE 11 render error
        path.join(process.cwd(), 'src/js/main.js')
    ],

    output: {
        publicPath: '/'
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
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
});

module.exports = config;
