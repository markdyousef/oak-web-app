// @flow
import { fromJS, Map, List } from 'immutable';
import * as types from '../constants/ActionTypes';
import { EditorState } from 'draft-js';
import { decorator } from 'zen-editor';

// type State = {
//     isLoading: bool,
//     shouldUpdate: bool,
//     cardId: ?string,
//     collectionId: ?string,
//     message: ?Map<string, string>
// };

type State = Map<string, any>

export type Action = {
    type?: string,
    data?: Object
};

const initialState:State = Map({
    isLoading: false,
    shouldUpdate: false,
    cardId: null,
    collectionId: null,
    message: null,
    editorState: EditorState.createEmpty(decorator),
    images: List([]),
    name: '',
    readOnly: false,
    menu: null,
    isSaved: false
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
    case types.SET_CARD:
        if (action.data && action.data.card) {
            const { data: { card } } = action;
            return state
                .set('isLoading', false)
                .set('cardId', card.id)
                .set('message', null)
                .set('images', List([]))
        }
    default:
        return state;
    }
};
