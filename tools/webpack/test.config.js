const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const modules = [
    'app',
    'node_modules'
];


module.exports = {
    entry: [
        path.join(process.cwd(), 'src/js/main.js')
    ],

    output: {
        filename: 'bundle.[chunkhash].js'
    },

    debug: false,
    noInfo: true,
    target: 'web',
    progress: true,
    devtool: 'inline-source-map',

    stats: {
        colors: true,
        reasons: true,
        hash: false,
        version: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        cached: false,
        cachedAssets: false
    },

    module: {
        // Some libraries don't like being run through babel.
        // If they gripe, put them here.
        noParse: [
            /node_modules(\\|\/)sinon/
        ],
        loaders: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: 'null-loader'
            },

            // sinon.js--aliased for enzyme--expects/requires global vars.
            // imports-loader allows for global vars to be injected into the module.
            // See https://github.com/webpack/webpack/issues/304
            {
                test: /sinon(\\|\/)pkg(\\|\/)sinon\.js/,
                loader: 'imports?define=>false,require=>false'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [/node_modules/]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },

    plugins: [
        // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
        // inside your code for any environment checks; UglifyJS will automatically
        // drop any unreachable code.
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        })
    ],

    node: {
        fs: 'empty',
        child_process: 'empty',
        net: 'empty',
        tls: 'empty'
    },

    // required for enzyme to work properly
    externals: {
        jsdom: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window'
    },

    resolve: {
        modulesDirectories: modules,
        modules,
        alias: {
            // required for enzyme to work properly
            sinon: 'sinon/pkg/sinon'
        }
    }
};
