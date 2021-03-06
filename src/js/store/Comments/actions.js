// @flow
import * as types from '../constants/ActionTypes';
import type { Action } from './reducers';

type Field = {
    key: string,
    value: any
}

export const updateComments = (field: Field): Action => (
    {
        type: types.COMMENTS_STATE,
        data: {
            field
        }
    }
);
