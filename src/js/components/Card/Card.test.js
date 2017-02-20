import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';

it('renders correctly', () => {
    const props = {
        title: 'Design'
    };
    const component = renderer.create(
        <Card {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
