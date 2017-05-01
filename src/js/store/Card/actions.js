// @flow
import * as types from '../constants/ActionTypes';
import type { Action } from './reducers';

type Field = {
    key: string,
    value: any
}

export const setState = (field: Field): Action => (
    {
        type: types.CARD_STATE,
        data: {
            payload: field
        }
    }
);
