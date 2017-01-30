// @flow
import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

test('renders Home', () => {
    const shallowComponent = shallow(
        <Home />
    )
    expect(shallowComponent).toMatchSnapshot();
});
