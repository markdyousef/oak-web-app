// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import AddLabels from './AddLabels';

it('renders correctly', () => {
    const props = {
        cardLabels: [],
        changePage: () => {},
        collectionLabels: [],
        onSelect: () => {}

    };
    const component = renderer.create(
        <AddLabels {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
