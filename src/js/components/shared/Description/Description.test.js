import React from 'react';
import renderer from 'react-test-renderer';
import Description from './Description';

it('renders correctly', () => {
    const component = renderer.create(
        <Description />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
