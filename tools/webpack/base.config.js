const path = require('path');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV !== 'production';


const config = (options) => ({
    entry: options.entry,

    output: {
        filename: 'bundle.js',
        path: path.join(process.cwd(), 'build'),
        publicPath: '/'
    },

    debug: isDev,
    devtool: options.devtool,
    noInfo: true,
    target: 'web',
    progress: true,

    stats: {
        colors: true,
        reasons: isDev,
        hash: false,
        version: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        cached: false,
        cachedAssets: false
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
                // loader: 'html-loader'
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                // loaders: ["react-hot", "babel-loader"],
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
