/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';


describe('Home', () => {
    const wrapper = shallow(<Home />);

    it('renders as a <div>', () => {
        expect(wrapper.type()).to.eql('div');
    });

    it('contains a header', () => {
        expect(wrapper.find('h1')).to.have.length(1);
    });
});
