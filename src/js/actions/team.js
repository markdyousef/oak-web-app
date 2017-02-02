import * as type from '../constants/ActionTypes';
import claiJson from '../../data/clai/clai_slack.json';
import mastermindJson from '../../data/mastermind/mastermind_slack.json';
import krispaJson from '../../data/krispa/krispa_slack.json';
import travelJson from '../../data/travel/travel_slack.json';
import tradeXJson from '../../data/tradeX/tradeX_slack.json';

import { getChannels } from './channel';

export const getTeam = (team: String) => {
    let data = [];
    // get team data
    switch (team) {
    case 'clai':
        data = claiJson.team;
        break;
    case 'mastermind':
        data = mastermindJson.team;
        break;
    case 'krispa':
        data = krispaJson.team;
        break;
    case 'travel':
        data = travelJson.team;
        break;
    case 'trade':
        data = tradeXJson.team;
        break;
    default:
        break;
    }
    return {
        type: type.RECEIVE_TEAM,
        team,
        data
    };
};
