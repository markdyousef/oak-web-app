// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import ChannelDetail from './ChannelDetail';

test('renders ChannelDetail', () => {
    const props = {
        data: {
            id: 'id',
            name: 'general'
        }
    };
    const component = renderer.create(
        <ChannelDetail {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
