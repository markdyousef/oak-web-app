import React from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';

it('renders correctly', () => {
    const component = renderer.create(
        <Input />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
