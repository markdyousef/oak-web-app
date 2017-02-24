import React from 'react';
import renderer from 'react-test-renderer';
import Settings from './Settings';

it('renders correctly', () => {
    const component = renderer.create(
        <Settings />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
