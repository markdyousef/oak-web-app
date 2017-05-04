// @flow
import { Map, List, fromJS } from 'immutable';
import * as types from '../constants/ActionTypes';

type Creator = {
    name: string,
    username: string,
    avatar: Object,
    gravatar: string
}

type State = {
    isLoading: bool,
    showComments: bool,
    comments: Array<Object>,
    message: ?Object,
    creator: ?Creator,
    comment: Object,
    failedComment: Object,
};

export type Action = {
    type?: string,
    data?: Object
};

const initialState:State = Map({
    comments: List([]),
    failedComment: null,
    message: null,
    showComments: false,
    isLoading: false,
    creator: null
});

export default(state:State = initialState, action: Action):State => {
    switch (action.type) {
    case types.COMMENTS_STATE: {
        if (action.data && action.data.field) {
            const { data: { field } } = action;
            return state.set(field.key, fromJS(field.value));
        }
        return state;
    }
    default:
        return state;
    }
};
