// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import Graph from './Graph';

test('renders Graph', () => {
    const props = {
        data: {
            x: [],
            y: []
        },
        type: 'line'
    };
    const component = renderer.create(
        <Graph {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
