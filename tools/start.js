const browserSync = require('browser-sync');
const webpack = require('webpack');
const argv = require('yargs').argv;
const historyApiFallback = require('connect-history-api-fallback');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

const isDev = process.env.NODE_ENV !== 'production';

const webpackConfig = isDev
  ? require('./webpack/dev.config')
  : require('./webpack/prod.config');

if (argv.target === 'app') {
    webpackConfig.target = webpackTargetElectronRenderer(webpackConfig);
}

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
