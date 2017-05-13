// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import TopBar from './TopBar';

test('renders TopBar', () => {
    const props = {
        data: {}
    };
    const component = renderer.create(
        <TopBar {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
