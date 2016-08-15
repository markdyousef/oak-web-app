import { exec } from 'child_process';
import webpack from 'webpack';

const isDev = process.env.NODE_ENV !== 'production';

const webpackConfig = isDev
  ? require('./webpack/dev.config')
  : require('./webpack/prod.config');


function build(config) {
    return new Promise((resolve, reject) => {
        webpack(config, (err, stats) => {
            if (err) return reject(err);
            return resolve(stats);
        });
    });
}
function deleteFolder(folder) {
    return new Promise((resolve, reject) => {
        exec('rm -rf ' + folder, (err) => {
            if (err) return reject(err);
            return resolve();
        });
    });
}

function run() {
    return deleteFolder('build')
    .then(() => build(webpackConfig));
}

run();
