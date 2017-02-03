// @flow
import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Avatar from './Avatar';

test('renders Avatar', () => {
    const props = {
        channels: [],
        getTeam: () => {},
        name: 'clai'
    };
    const shallowComponent = shallow(
        <Avatar {...props} />
    );
    expect(shallowComponent).toMatchSnapshot();
});
