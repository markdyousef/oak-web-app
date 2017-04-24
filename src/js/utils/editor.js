// @flow
import { EditorState, convertFromRaw } from 'draft-js';

export const parseComments = (comments:Array<Object>):Array<Object> => {
    return comments.map((item) => {
        try {
            let { text } = item;
            text = JSON.parse(text);
            text = EditorState.createWithContent(convertFromRaw(text));
            return { ...item, text };
        } catch (e) {
            return null;
        }
    }).filter(Boolean);
};
