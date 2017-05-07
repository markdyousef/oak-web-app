// @flow
import reducer, { initialState } from './reducers';
import * as types from '../constants/ActionTypes';

describe('labels reducer', () => {
    it('should return initialState', () => {
        expect(reducer(undefined, {}))
            .toEqual(initialState);
    });
    it('should set field and return new state', () => {
        const action = {
            type: types.LABELS_STATE,
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
