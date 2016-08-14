import os from 'os';
import { exec } from 'child_process';
import { argv } from 'yargs';
import packager from 'electron-packager';
import webpack from 'webpack';

import mainConfig from '../webpack/electron.config.js';
import renderConfig from '../webpack/prod.config.js';
import pkg from '../../package.json';

const deps = Object.keys(pkg.dependencies);
const devDeps = Object.keys(pkg.devDependencies);


function build(config) {
    return new Promise((resolve, reject) => {
        webpack(config, (err, stats) => {
            if (err) return reject(err);
            return resolve(stats);
        });
    });
}

function pack(platform, arch) {
    const ignores = [
        '^/build($|/)'
    ].concat(devDeps.map(name => `/node_modules/${name}($|/)`))
    .concat(deps.map(name => `/node_modules/${name}($|/)`));

    const required = {
        arch,
        platform,
        dir: 'build'
    };

    const optionalAll = {
        'name': pkg.app.name,
        'app-version': pkg.app.version,
        'build-version': pkg.app.build,
        'app-copyright': 'Copyright',
        'all': false,
        'asar': true,
        'ignore': ignores,
        'out': 'release',
        'prune': true
    };

    const optionalMac = {};
    const optionalWin = {};

    const opts = Object.assign({},
        required,
        optionalAll,
        optionalMac,
        optionalWin
    );

    return new Promise((resolve, reject) => {
        packager(opts, (err, appPaths) => {
            if (err) return reject(err);
            return resolve(appPaths);
        });
    });
}

function getArch(args) {
    // Archs: ia32, x64, all
    return args.all ? 'all' : os.arch();
}

function getPlatform(args) {
    // Platforms: linux, win32, darwin, mas, all
    return args.all ? 'all' : os.platform();
}

function deleteFolder(folder) {
    return new Promise((resolve, reject) => {
        exec('rm -rf ' + folder, (err) => {
            if (err) return reject(err);
            return resolve();
        });
    });
}

function copyPackage() {
    return new Promise((resolve, reject) => {
        exec('cp package.json build/package.json', (err) => {
            if (err) return reject(err);
            return resolve();
        });
    });
}

function start() {
    console.log('Start packager!');

    const platform = getPlatform(argv);
    const arch = getArch(argv);

    if (platform === 'darwin' && arch === 'ia32') {
        console.log('No support for darwin ia32');
        return;
    }

    renderConfig.target = 'electron-renderer';

    deleteFolder('build')
    .then(() => deleteFolder('release'))
    .then(() => build(mainConfig))
    .then(() => build(renderConfig))
    .then(() => copyPackage())
    .then(() => pack(platform, arch))
    .then(() => {
        console.log('Done!');
    })
    .catch((err) => {
        console.log(err, err.stack);
    });
}

/*
Args:
--all (Package all platforms. Otherwise only this)
*/

start();
