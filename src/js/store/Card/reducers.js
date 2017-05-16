// @flow
import { fromJS, Map, List } from 'immutable';
import * as types from '../constants/ActionTypes';
import { EditorState, convertFromRaw } from 'draft-js';
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
    data?: Object,
    result?: Object,
    queryId?: string
};

const initialState:State = Map({
    queryId: null,
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

const convertToEditor = (content: string):EditorState => {

    let state;
    try {
        state = JSON.parse(content);
    } catch (e) {
        state = null;
    }
    if (state !== null && typeof state === 'object') {
        const contentState = convertFromRaw(state);
        return EditorState.createWithContent(contentState, decorator);

    }
    return EditorState.createEmpty(decorator);
}

export default (state: State = initialState, action: Action): State => {
    switch (action.type) {
    // case types.UPDATE_CARD:
    //     return state.set('shouldUpdate', action.shouldUpdate);
    case types.CARD_STATE:
        if (action.data && action.data.field) {
            const { data: { field } } = action;
            return state.set(field.key, fromJS(field.value));
        }
        return state;
    case types.CLEAR_CARD:
        return state
            .set('cardId', null)
            .set('collectionId', null)
            .set('editorState', EditorState.createEmpty(decorator))
    case types.SET_CARD:
        if (action.data && action.data.card) {
            const { data: { card } } = action;
            return state
                .set('isLoading', false)
                .set('cardId', card.id)
                .set('message', null)
                .set('images', List([]))
        }
        return state;
    case types.SET_CARD_CONTENT:
        if (action.data && action.data.content) {
            const { data: { content } } = action;
            return state.mergeIn(['editorState'], content);
        }
        return state;
    case types.SET_CARD_IMAGE:
        if (action.data && action.data.image) {
            const { data: { image } } = action;
            return state.set('images', state.get('images').push(fromJS(image)));
        }
    case 'APOLLO_QUERY_RESULT':
        if (action.operationName === 'getCard' && action.result) {
            const { result: { data }, queryId } = action;
            if (data.seed && data.seed.content && queryId) {
                const editorState = convertToEditor(data.seed.content);
                console.log(queryId);
                return state.mergeIn(['editorState'], editorState).set('queryId', queryId);
            }
            return state;
        }
        return state;
    case 'APOLLO_QUERY_RESULT_CLIENT':
        if (action.queryId === state.get('queryId') && action.result) {
            const { result: { data }, queryId } = action;
            if (data.seed && data.seed.content && queryId) {
                console.log(data.seed);
                const editorState = convertToEditor(data.seed.content);
                return state.mergeIn(['editorState'], editorState).set('queryId', queryId);
            }
        }
        return state;
    default:
        return state;
    }
};
