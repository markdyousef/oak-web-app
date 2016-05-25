const path = require('path');
const webpack = require('webpack');


const modules = [
    'src',
    'node_modules'
];


module.exports = {
    entry: [
        path.join(process.cwd(), 'src/js/main.js')
    ],

    output: {
        filename: 'bundle.[chunkhash].js'
    },

    devtool: 'inline-source-map',

    target: 'node',

    module: {
        // Some libraries don't like being run through babel.
        // If they gripe, put them here.
        noParse: [
            /node_modules(\\|\/)sinon/
        ],
        loaders: [
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
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
                loader: 'babel-loader',
                exclude: [/node_modules/]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],

    // Some node_modules pull in Node-specific dependencies.
    // Since we're running in a browser we have to stub them out.
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
