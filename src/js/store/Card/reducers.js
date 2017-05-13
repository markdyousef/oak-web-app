// @flow
import { fromJS, Map } from 'immutable';
import * as types from '../constants/ActionTypes';

// type State = {
//     isLoading: bool,
//     shouldUpdate: bool,
//     cardId: ?string,
//     collectionId: ?string,
//     message: ?Map<string, string>
// };

type State = Map<string, Object>

export type Action = {
    type?: string,
    data?: Object
};

const initialState:State = Map({
    isLoading: false,
    shouldUpdate: false,
    cardId: null,
    collectionId: null,
    message: null
});

export default (state: State = initialState, action: Action): State => {
    switch (action.type) {
    // case types.UPDATE_CARD:
    //     return state.set('shouldUpdate', action.shouldUpdate);
    case types.CARD_STATE: {
        if (action.data && action.data.field) {
            const { data: { field } } = action;
            return state.set(field.key, fromJS(field.value));
        }
        return state;
    }
    case types.CLEAR_CARD:
        return initialState;
    default:
        return state;
    }
};
