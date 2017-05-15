// @flow
import { Map } from 'immutable';
import reducer from './reducers';
import * as actions from './actions';
import * as types from '../constants/ActionTypes';

const initialState = Map({
    isLoading: false,
    shouldUpdate: false,
    cardId: '1',
    collectionId: null,
    message: Map({ type: 'error', message: 'something' })
});

describe('comments reducer', () => {
    it('should return initialState', () => {
        expect(reducer(initialState, {}))
            .toEqual(initialState);
    });
    it('should set field an return new state', () => {
        const field = {
            key: 'isLoading',
            value: true
        };
        const action = actions.updateCard(field);
        const state = reducer(initialState, action);
        expect(state.get('isLoading')).toEqual(true);
    });
    it('should clear the Card store', () => {
        const action = actions.clearCard();
        const state = reducer(initialState, action);
        expect(state.get('cardId')).toEqual(null);
    });
    it('should set card fields and ui state', () => {
        const card = { id: '2' };
        const action = actions.setCard(card);
        const state = reducer(initialState, action);
        expect(state.get('cardId')).toEqual(card.id);
        expect(state.get('message')).toEqual(null);
    })
    xit('should set card content', () => {
        const content = '{{cool: cool}}'
        const action = actions.setCardContent(content);
        const state = reducer(initialState, action);
        expect(state).not.toEqual(initialState);
    })
});
