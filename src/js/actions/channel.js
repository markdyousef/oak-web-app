import claiJson from '../../data/clai/slack_raw.json';
import mastermindJson from '../../data/mastermind/slack_raw.json';
import krispaJson from '../../data/krispa/slack_raw.json';
import travelJson from '../../data/travel/slack_raw.json';
import tradeXJson from '../../data/tradeX/slack_raw.json';



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
        type: 'RECEIVE_CHANNEL',
        data
    };
};

// export const getChannelMessages = (team: String, name: String) => {
//     let data = {};
//
//     switch (team) {
//     case 'clai':
//         data = require('../../data/clai/messages/' + name + '.json');
//         break;
//     default:
//         data = require('../../data/clai/messages/' + name + '.json');
//         break;
//     }
//     return {
//         type: 'GET_MESSAGES_SUCCESS',
//         data
//     };
// };
