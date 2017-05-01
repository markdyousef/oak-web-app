// @flow
import * as type from 'immutable';
import type { Action } from './reducers';

type Field = {
    key: string,
    value: any
}

export const setState = (field: Field): Action => (
    {
        type: type.COMMENT_STATE,
        data: {
            payload: field
        }
    }
)
