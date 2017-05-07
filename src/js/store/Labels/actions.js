// @flow
import * as types from '../constants/ActionTypes';
import type { Action } from './reducers';

type Field = {
    key: string,
    value: any
}

export const updateLabels = (field: Field): Action => {
    return ({
        type: types.LABELS_STATE,
        data: {
            field
        }
    });
};
