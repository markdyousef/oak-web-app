import React from 'react';
import renderer from 'react-test-renderer';
import Categories from './Categories';

it('renders correctly', () => {
    const component = renderer.create(
        <Categories />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
