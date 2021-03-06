const path = require('path');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV !== 'production';


const config = options => ({
    entry: options.entry,

    output: {
        filename: options.output.filename || 'bundle.js',
        path: path.join(process.cwd(), 'build'),
        publicPath: options.output.publicPath,
        libraryTarget: options.output.libraryTarget
    },

    debug: isDev,
    devtool: options.devtool,
    noInfo: true,
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
                // Every css file not in the src folder
                test: /\.css$/,
                exclude: path.join(process.cwd(), 'src'),
                loaders: [
                    'style',
                    'css?sourceMap&minimize',
                    'postcss'
                ]
            },
            {
                // Every css file not in the node_modules folder
                test: /\.css$/,
                exclude: path.join(process.cwd(), 'node_modules'),
                loaders: [
                    'style',
                    'css-loader?modules&importLoaders=1',
                    'postcss'
                ]
            },
            {
                test: /\.config.css$/,
                exclude: path.join(process.cwd(), 'node_modules'),
                loader: 'babel-loader!postcss-variables-loader'
            },
            {
                // inline base64 URLs for <=8k images, direct URLs for the rest
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.(ttf|eot|svg||woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
        ]
    },

    resolve: {
        root: path.join(process.cwd(), 'src'),
        extensions: ['', '.js'],
        ...options.resolve
    },

    node: options.node,
    target: options.target,
    postcss: () => options.postcssPlugins
});

module.exports = config;
