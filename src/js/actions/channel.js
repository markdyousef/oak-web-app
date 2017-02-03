import _ from 'lodash';

import * as type from '../constants/ActionTypes';

export const getChannel = (team: String, id: String) => {
    let data = require(`../../data/${team}/channels/channels.json`);
    let tone = {};

    // transform object to array
    if (typeof data === 'object') {
        data = _.values(data);
        data = data.filter(channel => channel.id === id)[0];
    }

    if (data.name) {
        tone = require(`../../data/${team}/messages/${data.name}-tone.json`);
    }

    return {
        type: type.RECEIVE_CHANNEL,
        data,
        team,
        tone
    };
};

export const getChannels = (team: String) => {
    let data = require(`../../data/${team}/channels/channels.json`);

    // transform object to array
    if (typeof data === 'object') {
        data = _.values(data);
    }
    return {
        type: type.RECEIVE_CHANNELS,
        data,
        team
    };
};
