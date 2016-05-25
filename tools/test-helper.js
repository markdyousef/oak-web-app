// jsdom
import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;
global.document = doc;
global.window = win;

// Propagate to global
Object.keys(window).forEach((key) => {
    if (window.hasOwnProperty(key) && !(key in global)) {
        global[key] = window[key];
    }
});


// Add libs to all tests
import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import TestUtils from 'react-addons-test-utils';

chai.use(chaiEnzyme());

global.chai = chai;
global.expect = expect;
global.sinon = sinon;
global.expect = chai.expect;
global.TestUtils = TestUtils;
