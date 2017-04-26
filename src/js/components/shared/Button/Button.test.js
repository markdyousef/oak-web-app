// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { SquareButton } from './index';

test('renders SquareButton', () => {
    const props = {
        onClick: () => {},
        text: 'Hello'
    };
    const component = renderer.create(
        <SquareButton {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
