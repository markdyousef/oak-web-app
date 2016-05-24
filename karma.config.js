const webpackConfig = require('./tools/webpack/test.config');

module.exports = (config) => {
    config.set({
        frameworks: ['mocha'],

        reporters: ['mocha'],

        browsers: ['Chrome'],

        autoWatch: false,
        singleRun: true,

        files: [
            './tools/test-helper.js',
            './src/**/*.spec.js'
        ],

        preprocessors: {
            // eslint-disable-next-line  no-useless-computed-key
            ['./tools/test-helper.js']: ['webpack', 'sourcemap'],
            ['./src/**/*.spec.js']: ['webpack', 'sourcemap'] // eslint-disable-line  no-useless-computed-key
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: true
        }
    });
};
