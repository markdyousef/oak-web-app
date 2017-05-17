// @flow
import { EditorState, convertFromRaw } from 'draft-js';
import { decorator } from 'zen-editor';
import * as types from '../constants/ActionTypes';
import type { Action } from './reducers';

type Field = {
    key: string,
    value: any
}

export const updateCard = (field: Field): Action => {
    return ({
        type: types.CARD_STATE,
        data: {
            field
        }
    });
};

export const clearCard = () => (
    {
        type: types.CLEAR_CARD
    }
);

type Card = {
    id: string,
    name?: string,

}
export const setCard = (card: Card) => (
    {
        type: types.SET_CARD,
        data: { card }
    }
);

export const setCardContent = (content: string) => {
    // create editorstate based on content (string)
    let editorState;
    try {
        editorState = JSON.parse(content);
    } catch (e) {
        editorState = null;
    }
    if (editorState !== null && typeof editorState === 'object') {
        const state = convertFromRaw(editorState);
        editorState = EditorState.createWithContent(state, decorator)
        return {
            type: types.SET_CARD_CONTENT,
            data: { content: editorState }
        }
    }
    return {
        type: types.SET_CARD_CONTENT,
        data: { message: 'wrong format!'}
    }
}

export const addCardImage = (image:Object) => (
    {
        type: types.SET_CARD_IMAGE,
        data: { image }
    }
)
