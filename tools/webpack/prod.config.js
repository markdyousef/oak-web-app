const path = require('path');
const webpack = require('webpack');

const postcssFocus = require('postcss-focus');
const cssnext = require('postcss-cssnext');
const postcssReporter = require('postcss-reporter');


const config = require('./base.config')({
    entry: [
        path.join(process.cwd(), 'src/js/main.js')
    ],

    postcssPlugins: [
        postcssFocus(),
        cssnext({
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
