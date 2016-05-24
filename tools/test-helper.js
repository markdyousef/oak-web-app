// needed for regenerator-runtime
// (ES7 generator support is required by redux-saga)
import 'babel-polyfill';

// jsdom
import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;
global.document = doc;
global.window = win;


// import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

global.chai = chai;
global.expect = expect;
// global.sinon = sinon;
global.expect = chai.expect;
global.should = chai.should();


const propagateToGlobal = (window) => {
    for (const key in window) {
        if (!window.hasOwnProperty(key)) continue;
        if (key in global) continue;

        global[key] = window[key];
    }
};

propagateToGlobal(win);

// Include all .js files under `app`, except app.js, reducers.js, routes.js and
// store.js. This is for isparta code coverage
// const context = require.context('../src', true, /^^((?!(app|reducers|routes|store)).)*\.js$/);
// context.keys().forEach(context);
