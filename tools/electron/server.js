import { argv } from 'yargs';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackTargetElectronRenderer from 'webpack-target-electron-renderer';
import history from 'connect-history-api-fallback';

const isDev = process.env.NODE_ENV !== 'production';

const webpackConfig = isDev
  ? require('../webpack/dev.config')
  : require('../webpack/prod.config');

if (argv.target === 'app') {
    webpackConfig.target = webpackTargetElectronRenderer(webpackConfig);
}

const app = express();
const compiler = webpack(webpackConfig);
const PORT = argv.port || 3000;

const wpDM = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    silent: true,
    stats: {
        colors: true
    }
});

app.use(history());
app.use(wpDM);
app.use(webpackHotMiddleware(compiler));

const server = app.listen(PORT, 'localhost', err => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(`Listening at http://localhost:${PORT}`);
});

process.on('SIGTERM', () => {
    console.log('Stopping dev server');
    wpDM.close();
    server.close(() => {
        process.exit(0);
    });
});
