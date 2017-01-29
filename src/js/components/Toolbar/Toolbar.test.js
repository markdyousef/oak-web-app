// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import Toolbar from './Toolbar';

test('renders Toolbar', () => {
    const props = {
        selectTeam: () => {}
    };
    const component = renderer.create(
        <Toolbar {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
