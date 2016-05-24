/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');

const frontend = require('./middleware');
const isDev = process.env.NODE_ENV !== 'production';

const app = express();

// Initialize frontend middleware that will serve your JS app
const webpackConfig = isDev
  ? require('../webpack/dev.config')
  : require('../webpack/prod.config');

app.use(frontend(webpackConfig));

const port = process.env.PORT || 3000;

// Start your app.
app.listen(port, (err) => {
    if (err) {
        return logger.error(err);
    }

    logger.appStarted(port);
});
