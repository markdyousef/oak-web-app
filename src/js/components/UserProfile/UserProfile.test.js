// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import UserProfile from './UserProfile';

test('renders UserProfile', () => {
    const props = {
        userId: 'userId',
        getInsight: () => {},
        getUser: () => {}
    };
    const component = renderer.create(
        <UserProfile {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
