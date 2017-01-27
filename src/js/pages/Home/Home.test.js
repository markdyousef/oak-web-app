// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

test('renders Home', () => {
    const props = {
    };
    const component = renderer.create(
        <Home {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
