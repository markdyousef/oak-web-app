// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import MessageStats from './MessageStats';

test('renders MessageStats', () => {
    const props = {
        channel: 'name',
        messages: null,
        isLoading: false
    };
    const component = renderer.create(
        <MessageStats {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
