// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store'

import ChannelDetail from './ChannelDetail';

test('renders ChannelDetail', () => {
    const props = {
        data: {
            id: 'id',
            name: 'general'
        },
        params: {
            channelId: 'id'
        },
        getChannel: () => {},
        team: 'team name'
    };
    const component = renderer.create(
        <ChannelDetail {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
