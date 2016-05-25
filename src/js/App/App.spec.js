/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {
    const wrapper = shallow(<App />);

    it('renders as a <div>', () => {
        expect(wrapper.type()).to.eql('div');
    });

    it('has style with height 100%', () => {
        const expectedStyles = {
            height: '100%',
            background: '#333'
        };
        expect(wrapper.prop('style')).to.eql(expectedStyles);
    });

    it('contains a header explaining the app', () => {
        expect(wrapper.find('.welcome-header')).to.have.length(1);
    });
});
