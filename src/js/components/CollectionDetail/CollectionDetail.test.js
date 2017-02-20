import React from 'react';
import renderer from 'react-test-renderer';
import CollectionDetail from './CollectionDetail';

it('renders correctly', () => {
    const component = renderer.create(
        <CollectionDetail />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
