// @flow
import { List } from 'immutable';
import reducer, { State } from './reducers';
import * as types from '../constants/ActionTypes';
import * as actions from './actions';

const initialState: StateRecord = State({
    showLabels: false,
    isLoading: false,
    message: null,
    name: null,
    selectedColor: null,
    collectionLabels: List([{ name: 'cool', id: '321' }]),
    cardLabels: List(['321']),
    page: 'ADD'
});

describe('labels reducer', () => {
    it('should return initialState', () => {
        expect(reducer(initialState, {}))
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
    it('should add labelId to cardLabels', () => {
        const labelId = '123';
        const action = actions.addCardLabel(labelId);
        const state = reducer(initialState, action);
        const cardLabels = state.get('cardLabels');
        expect(cardLabels).toContain(labelId);
    });
    it('should remove labelId from cardLabels', () => {
        const labelId = '321';
        const action = actions.removeCardLabel(labelId);
        const state = reducer(initialState, action);
        const cardLabels = state.get('cardLabels');
        expect(cardLabels).not.toContain(labelId);
    });
    it('should add label to collectionLabels', () => {
        const label = { name: 'cool', id: '1234' };
        const action = actions.addCollectionLabel(label);
        const state = reducer(initialState, action);
        const collectionLabels = state.get('collectionLabels');
        expect(collectionLabels).toContain(label);
    });
    it('should remove label from collectionLabels', () => {
        const labelId = '321';
        const action = actions.removeCollectionLabel(labelId);
        const state = reducer(initialState, action);
        const collectionLabels = state.get('collectionLabels');
        expect(collectionLabels).not.toContain(labelId);
    });
});
