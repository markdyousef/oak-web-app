import React from 'react';
import renderer from 'react-test-renderer';
import Collections from './Collections';

it('renders correctly', () => {
    const component = renderer.create(
        <Collections />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
