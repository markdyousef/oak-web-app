// @flow
import * as type from '../constants/ActionTypes';

export const getUser = (team: String, id: String) => {
    const tone = require(`../../data/${team}/analysis/users/${id}_tone.json`);
    const insight = require(`../../data/${team}/analysis/users/${id}_pi.json`);

    return {
        type: type.RECEIVE_USER,
        tone,
        insight
    };
};
