// @flow
import * as type from '../constants/ActionTypes';

export const getInsight = (team: string, userId: string, otherId: string) => {
    const tone = require(`../../data/${team}/analysis/users/${userId}_tone.json`);
    const insight = require(`../../data/${team}/analysis/users/${userId}_pi.json`);

    let toneOther = {};
    let insightOther = {};
    if (otherId) {
        toneOther = require(`../../data/${team}/analysis/users/${otherId}_tone.json`);
        insightOther = require(`../../data/${team}/analysis/users/${otherId}_pi.json`);
    }
    return {
        type: type.RECEIVE_INSIGHTS,
        tone,
        toneOther,
        insight,
        insightOther
    };
};
