/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {
    const wrapper = shallow(<App />);

    it('renders as a <div>', () => {
        expect(wrapper.type()).to.eql('div');
    });
});
