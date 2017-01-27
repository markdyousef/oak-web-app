// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import ChannelStats from './ChannelStats';

test('renders ChannelStats', () => {
    const props = {
        data: {
            name: 'general'
        }
    };
    const component = renderer.create(
        <ChannelStats {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
