import _ from 'lodash';
import * as type from '../constants/ActionTypes';

import claiJson from '../../data/clai/users/users.json';
import mastermindJson from '../../data/mastermind/users/users.json';
import krispaJson from '../../data/krispa/users/users.json';
import travelJson from '../../data/travel/users/users.json';
import tradeXJson from '../../data/tradeX/users/users.json';

export const getMembers = (team: String) => {
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
        type: type.RECEIVE_MEMBERS,
        data,
        team
    };
};
