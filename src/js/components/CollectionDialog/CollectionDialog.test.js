import React from 'react';
import renderer from 'react-test-renderer';
import CollectionDialog from './CollectionDialog';

it('renders correctly', () => {
    const component = renderer.create(
        <CollectionDialog />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
