import React from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';

it('renders correctly', () => {
    const props = {
        title: 'Name',
        onChange: () => {}
    };
    const component = renderer.create(
        <Input {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
