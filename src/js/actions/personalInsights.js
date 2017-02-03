// @flow
import * as type from '../constants/ActionTypes';

export const getInsight = (team: string, userId: string) => {
    const data = require(`../../data/${team}/users/${userId}_pi.json`);
    console.log(data);
    return {
        type: type.RECEIVE_INSIGHTS,
        userId,
        data
    };
};
