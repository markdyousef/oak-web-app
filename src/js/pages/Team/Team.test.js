// @flow
import React from 'react';
import { shallow } from 'enzyme';
import Team from './Team';

test('renders Team', () => {
    const shallowComponent = shallow(
        <Team />
    )
    expect(shallowComponent).toMatchSnapshot();
});
