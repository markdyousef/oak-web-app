import { argv } from 'yargs';
import webpack from 'webpack';
import historyApiFallback from 'connect-history-api-fallback';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackTargetElectronRenderer from 'webpack-target-electron-renderer';

import http from 'http';
import express from 'express';


const isDev = process.env.NODE_ENV !== 'production';

const webpackConfig = isDev
  ? require('../webpack/dev.config')
  : require('../webpack/prod.config');

if (argv.target === 'app') {
    webpackConfig.target = webpackTargetElectronRenderer(webpackConfig);
}

const bundler = webpack(webpackConfig);


// Express Server

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(historyApiFallback());

app.use(webpackDevMiddleware(bundler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    silent: true,
    stats: {
        colors: true
    }
}));

app.use(webpackHotMiddleware(bundler, {
    log: console.log,
    heartbeat: 10 * 1000
}));

// app.use(express.static('src'));

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/index.html');
// });

http.createServer(app).listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});
