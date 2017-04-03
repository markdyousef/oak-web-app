// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from './Dropdown';

test('renders Dropdown', () => {
    const props = {
    };
    const component = renderer.create(
        <Dropdown {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
