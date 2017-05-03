// @flow
import { Map } from 'immutable';
import * as type from '../constants/ActionTypes';

export type State = {
    shouldUpdate: bool
};

export type Action = {
    type: string
};

const initialState = Map({
    shouldUpdate: false
});

export default (state: State = initialState, action: Action): State => {
    switch (action.type) {
    case type.UPDATE_CARD:
        return state.set('shouldUpdate', action.shouldUpdate);
    default:
        return state;
    }
};
