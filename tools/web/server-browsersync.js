import { argv } from 'yargs';
import browserSync from 'browser-sync';
import webpack from 'webpack';
import historyApiFallback from 'connect-history-api-fallback';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackTargetElectronRenderer from 'webpack-target-electron-renderer';


const isDev = process.env.NODE_ENV !== 'production';

const webpackConfig = isDev
  ? require('../webpack/dev.config')
  : require('../webpack/prod.config');

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
