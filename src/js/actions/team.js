import claiJson from '../../../../data/clai/slack_raw.json';
import mastermindJson from '../../../../data/mastermind/slack_raw.json';
import krispaJson from '../../../../data/krispa/slack_raw.json';
import travelJson from '../../../../data/travel/slack_raw.json';
import tradeX from '../../../../data/tradeX/slack_raw.json';

export const getTeam = (team: String) => {
    let data = {};
    // get team data
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
    case 'tradeX':
        data = tradeX;
        break;
    default:
        data = claiJson;
        break;
    }
    return {
        type: 'GET_TEAM_SUCCESS',
        data
    };
};
