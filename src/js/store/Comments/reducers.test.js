// @flow
import { Map, List } from 'immutable';
import reducer from './reducers';
import * as types from '../constants/ActionTypes';

const initialState = Map({
    comments: List([]),
    failedComment: null,
    message: null,
    showComments: false,
    isLoading: false,
    creator: null
});

describe('comments reducer', () => {
    it('should return initialState', () => {
        expect(reducer(undefined, {}))
            .toEqual(initialState);
    });
    it('should set field an return new state', () => {
        const action = {
            type: types.COMMENTS_STATE,
            data: {
                field: {
                    key: 'isLoading',
                    value: true
                }
            }
        };
        const state = reducer(initialState, action);
        expect(state.get('isLoading')).toEqual(true);
    });
});
