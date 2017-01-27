// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import BaseStats from './BaseStats';

test('renders BaseStats', () => {
    const props = {
        data: []
    };
    const component = renderer.create(
        <BaseStats {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
