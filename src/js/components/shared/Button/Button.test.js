// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

test('renders Button', () => {
    const props = {
        onClick: () => {},
        text: 'Hello'
    };
    const component = renderer.create(
        <Button {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
