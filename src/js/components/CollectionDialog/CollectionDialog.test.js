import React from 'react';
import renderer from 'react-test-renderer';
import CollectionDialog from './CollectionDialog';

it('renders correctly', () => {
    const props = {
        close: () => {}
    }
    const component = renderer.create(
        <CollectionDialog {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
