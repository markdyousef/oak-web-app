// @flow
import * as types from '../constants/ActionTypes';
import type { Action } from './reducers';

type Field = {
    key: string,
    value: any
}

export const updateCard = (field: Field): Action => {
    return (
    {
        type: types.CARD_STATE,
        data: {
            field
        }
    }
    );
};
