import claiJson from '../../../../data/clai/slack_raw.json';
import mastermindJson from '../../../../data/mastermind/slack_raw.json';
import krispaJson from '../../../../data/krispa/slack_raw.json';
import travelJson from '../../../../data/travel/slack_raw.json';
import tradeX from '../../../../data/tradeX/slack_raw.json';

export const getChannel = (team: String, id: String) => {
    let data = {}
    switch (team) {
    case 'clai':
        data = claiJson.filter(channel => channel.id === id)[0];
        break;
    default:
        break;
    }

    return {
        type: 'GET_CHANNEL_SUCCESS',
        data
    };
};
