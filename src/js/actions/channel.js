import _ from 'lodash';

import * as type from '../constants/ActionTypes';
import claiJson from '../../data/clai/channels/channels.json';
import mastermindJson from '../../data/mastermind/channels/channels.json';
import krispaJson from '../../data/krispa/channels/channels.json';
import travelJson from '../../data/travel/channels/channels.json';
import tradeXJson from '../../data/tradeX/channels/channels.json';

export const getChannel = (team: String, id: String) => {
    let data = {};
    switch (team) {
    case 'clai':
        data = claiJson.filter(channel => channel.id === id)[0];
        break;
    case 'mastermind':
        data = mastermindJson.filter(channel => channel.id === id)[0];
        break;
    case 'krispa':
        data = krispaJson.filter(channel => channel.id === id)[0];
        break;
    case 'travel':
        data = travelJson.filter(channel => channel.id === id)[0];
        break;
    case 'trade':
        data = tradeXJson.filter(channel => channel.id === id)[0];
        break;
    default:
        break;
    }

    return {
        type: type.RECEIVE_CHANNEL,
        data,
        team
    };
};

export const getChannels = (team: String) => {
    let data = [];
    switch (team) {
    case 'clai':
        data = claiJson;
        break;
    case 'mastermind':
        data = mastermindJson;
        break;
    case 'krispa':
        data = krispaJson;
        break;
    case 'travel':
        data = travelJson;
        break;
    case 'trade':
        data = tradeXJson;
        break;
    default:
        break;
    }

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
