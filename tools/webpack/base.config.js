const path = require('path');

const webpack = require('webpack');

const isDebug = !(process.argv.includes('--release') || process.argv.includes('-r'));
const isVerbose = process.argv.includes('--verbose') || process.argv.includes('-v');


const config = (options) => ({
    entry: options.entry,

    output: Object.assign({
        path: path.join(process.cwd(), 'build'),
        publicPath: '/'
    }, options.output),

    debug: isDebug,

    devtool: options.devtool,

    noInfo: true,

    target: 'web',

    progress: true,

    stats: {
        colors: true,
        reasons: isDebug,
        hash: isVerbose,
        version: isVerbose,
        timings: true,
        chunks: isVerbose,
        chunkModules: isVerbose,
        cached: isVerbose,
        cachedAssets: isVerbose
    },

    plugins: options.plugins.concat([
        // Expose NODE_ENV to webpack
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]),

    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude: /node_modules/,
                query: options.babelQuery
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                // inline base64 URLs for <=8k images, direct URLs for the rest
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
});

module.exports = config;
