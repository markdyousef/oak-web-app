const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = require('./base.config')({
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        path.join(process.cwd(), 'src/js/main.js')
    ],

    output: {
        filename: '[name].js'
        //chunkFilename: '[name].chunk.js'
    },

    devtool: 'cheap-module-eval-source-map', // 'inline-source-map',

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        })
    ],

    babelQuery: {
        presets: ['es2015', 'react', 'react-hmre']
    }
});

module.exports = config;
