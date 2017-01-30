// @flow
import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import BaseStats from './BaseStats';

test('renders BaseStats', () => {
    const props = {
        channels: [],
        getTeam: () => {}
    };
    const shallowComponent = shallow(
        <BaseStats {...props} />
    );
    expect(shallowComponent).toMatchSnapshot();
});
