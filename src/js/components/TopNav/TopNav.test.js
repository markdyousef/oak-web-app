// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import TopNav from './TopNav';

test('renders TopNav', () => {
    const props = {
        user: { id: 'id' }
    };
    const component = renderer.create(
        <TopNav {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
