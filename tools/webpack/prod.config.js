const path = require('path');
const webpack = require('webpack');

const config = require('./base.config')({
    entry: [
        path.join(process.cwd(), 'src/js/main.js')
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
