const browserSync = require('browser-sync');
const webpack = require('webpack');
const historyApiFallback = require('connect-history-api-fallback');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const isDev = process.env.NODE_ENV !== 'production';

const webpackConfig = isDev
  ? require('./webpack/dev.config')
  : require('./webpack/prod.config');

const bs = browserSync.create();
const bundler = webpack(webpackConfig);


bs.init({
    server: bundler.outputPath,

    open: false,

    logFileChanges: false,

    middleware: [
        historyApiFallback(),
        webpackDevMiddleware(bundler, {
            noInfo: true,
            publicPath: webpackConfig.output.publicPath,
            silent: true,
            stats: {
                colors: true
            }
        }),
        webpackHotMiddleware(bundler)
    ],

    files: [
        'src/css/*.css',
        'src/*.html'
    ]
});
