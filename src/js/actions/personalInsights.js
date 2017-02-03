// @flow
import * as type from '../constants/ActionTypes';

export const getInsight = (team: string, userId: string, otherId: string) => {
    const data = require(`../../data/${team}/users/${userId}_pi.json`);
    let otherData = {};
    if (otherId) {
        otherData = require(`../../data/${team}/users/${otherId}_pi.json`);
    }
    return {
        type: type.RECEIVE_INSIGHTS,
        userId,
        data,
        otherData
    };
};
