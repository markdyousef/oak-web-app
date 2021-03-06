const path = require('path');
const webpack = require('webpack');
const postcssFocus = require('postcss-focus');
const postcssCssNext = require('postcss-cssnext');
const postcssReporter = require('postcss-reporter');


const config = require('./base.config')({
    entry: [
        'whatwg-fetch',
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        path.join(process.cwd(), 'src/js/main.js')
    ],

    output: {
        publicPath: '/'
    },

    devtool: 'cheap-module-eval-source-map',

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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    babelQuery: {
        presets: ['react-hmre']
    }
});

module.exports = config;
