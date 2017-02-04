// @flow
import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import MyProfile from './MyProfile';

test('renders MyProfile', () => {
    const props = {
        channels: [],
        getTeam: () => {},
        name: 'clai'
    };
    const shallowComponent = shallow(
        <MyProfile {...props} />
    );
    expect(shallowComponent).toMatchSnapshot();
});
