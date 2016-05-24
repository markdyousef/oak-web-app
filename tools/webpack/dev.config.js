const path = require('path');
const webpack = require('webpack');

const config = require('./base.config')({
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        path.join(process.cwd(), 'src/js/main.js')
    ],

    devtool: 'cheap-module-eval-source-map',

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    babelQuery: {
        presets: ['react-hmre']
    }
});

module.exports = config;
