// @flow
import type { Action } from './reducers';
import * as type from '../constants/ActionTypes';

export const setUpdate = (shouldUpdate: bool):Action => {
    return {
        type: type.UPDATE_CARD,
        shouldUpdate
    };
};
