// @flow
import { List, Map } from 'immutable';
import reducer, { State } from './reducers';
import * as types from '../constants/ActionTypes';
import * as actions from './actions';
import { batchActions } from '../actions';

const initialState: StateRecord = State({
    showLabels: false,
    isLoading: false,
    message: null,
    activeLabel: Map({}),
    collectionLabels: List([Map({ name: 'cool', id: '321' })]),
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
    it('should set activeLabel with provided labelObj', () => {
        const label = { name: 'cool', id: '123', color: '#000' };
        const action = actions.editCollectionLabel(label);
        const state = reducer(initialState, action);
        const activeLabel = state.get('activeLabel').toJS();
        expect(activeLabel).toEqual(label);
    });
    it('should update field in activeLabel', () => {
        const label = { name: 'cool' };
        const action = actions.updateActiveLabel(label);
        const state = reducer(initialState, action);
        const activeLabel = state.get('activeLabel');
        expect(activeLabel.get('name')).toEqual(label.name);
    });
    it('should update label in collectionLabels', () => {
        const label = { id: '321', name: 'doom', color: 'green' };
        const action = actions.updateCollectionLabel(label);
        const state = reducer(initialState, action);
        const collectionLabels = state.get('collectionLabels');
        expect(collectionLabels).toContain(label);
    });
    it('should clear collectionLabels and set didInitialize to false', () => {
        const action = actions.clearLabels();
        const state = reducer(initialState, action);
        const collectionLabels = state.get('collectionLabels');
        const didInitialize = state.get('didInitialize');

        expect(collectionLabels).toEqual(List([]));
        expect(didInitialize).toEqual(false);
    });
    it('should reduce actions array and change state', () => {
        const label = { name: 'cool', color: '#000' };

        const firstAction = actions.addCollectionLabel(label);
        const secondAction = actions.updateActiveLabel({
            name: '',
            color: ''
        });
        const thirdAction = actions.updateLabels({
            key: 'page',
            value: 'ADD'
        });
        const batchedActions = [firstAction, secondAction, thirdAction];
        const action = batchActions(batchedActions);
        const state = reducer(initialState, action);
        const collectionLabels = state.get('collectionLabels');
        const activeLabel = state.get('activeLabel');
        const page = state.get('page');

        expect(collectionLabels).toContain(label);
        expect(activeLabel).toEqual(Map({ name: '', color: '' }));
        expect(page).toEqual('ADD');
    });
});
