import React from 'react';
import renderer from 'react-test-renderer';
import CollectionCard from './CollectionCard';

it('renders correctly', () => {
    const props = {
        name: 'collection'
    };
    const component = renderer.create(
        <CollectionCard {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
