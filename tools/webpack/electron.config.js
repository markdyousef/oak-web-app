import path from 'path';
import webpack from 'webpack';
import base from './base.config';

const config = base({
    entry: [
        'babel-polyfill',
        path.join(process.cwd(), 'tools/electron/main.js')
    ],
    output: {
        filename: 'main.js',
        libraryTarget: 'commonjs2'
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
    },
    node: {
        __dirname: false,
        __filename: false
    },
    target: 'electron-main'
});

module.exports = config;
