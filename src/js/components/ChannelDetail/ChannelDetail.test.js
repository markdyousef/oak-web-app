// @flow
import React from 'react';
import { shallow } from 'enzyme';
import ChannelDetail from './ChannelDetail';

test('renders ChannelDetail', () => {
    const props = {
        isLoading: false,
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
    const shallowComponent = shallow(
        <ChannelDetail {...props} />
    );
    expect(shallowComponent).toMatchSnapshot();
});
