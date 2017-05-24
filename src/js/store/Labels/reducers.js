// @flow
import { List, Map, fromJS } from 'immutable';
import { defineRecord } from '../types/record';
import type { Record } from '../types/record';
import * as types from '../constants/ActionTypes';

export type StateShape = {
    showLabels: bool,
    isLoading: bool,
    didInitialize: bool,
    activeLabel: Map<string, string>,
    message: ?Object,
    collectionLabels: List<Object>,
    cardLabels: List<string>,
    page: 'ADD' | 'EDIT' | 'CREATE'
}

export type Action = {
    type?: string,
    data?: Object
}

export type StateRecord = Record<StateShape>;

export const State = defineRecord('State', ({
    showLabels: false,
    isLoading: false,
    didInitialize: false,
    activeLabel: Map(({})),
    message: null,
    collectionLabels: List([]),
    cardLabels: List([]),
    page: 'ADD'
}: StateShape));

export const initialState: StateRecord = State({
    showLabels: false,
    isLoading: false,
    didInitialize: false,
    message: null,
    activeLabel: Map({}),
    collectionLabels: List([]),
    cardLabels: List([]),
    page: 'ADD'
});

const enableBatching = (reducer) => {
    return function batchingReducer(state, action) {
        switch (action.type) {
        case types.BATCH_LABEL_ACTIONS:
            if (action.data && action.data.actions) {
                const { data: { actions } } = action;
                return actions.reduce(reducer, state);
            }
            return reducer(state, action);
        default:
            return reducer(state, action);
        }
    };
};

export default enableBatching((state: StateRecord = initialState, action: Action): StateRecord => {
    switch (action.type) {
    case types.LABELS_STATE: {
        if (action.data && action.data.field) {
            const { data: { field } } = action;
            return state.set(field.key, fromJS(field.value));
        }
        return state;
    }
    case types.ADD_CARD_LABEL: {
        if (action.data && action.data.labelId) {
            const { data: { labelId } } = action;
            return state.set(
                'cardLabels',
                state.get('cardLabels').push(labelId)
            );
        }
        return state;
    }
    case types.REMOVE_CARD_LABEL: {
        if (action.data && action.data.labelId) {
            const { data: { labelId } } = action;
            return state.set(
                'cardLabels',
                state.get('cardLabels').filter(id => id !== labelId)
            );
        }
        return state;
    }
    case types.ADD_COLLECTION_LABEL: {
        if (action.data && action.data.label) {
            const { data: { label } } = action;
            return state.set(
                'collectionLabels',
                state.get('collectionLabels').push(label)
            );
        }
        return state;
    }
    case types.REMOVE_COLLECTION_LABEL: {
        if (action.data && action.data.labelId) {
            const { data: { labelId } } = action;
            return state.set(
                'collectionLabels',
                state
                    .get('collectionLabels')
                    .filter(label => label.get('id') !== labelId)
            );
        }
        return state;
    }
    case types.UPDATE_COLLECTION_LABEL: {
        if (action.data && action.data.label) {
            const { data: { label } } = action;
            return state.updateIn([
                'collectionLabels',
                state
                    .get('collectionLabels')
                    .findIndex(item => item.get('id') === label.id)
            ], () => label);
        }
        return state;
    }
    case types.EDIT_COLLECTION_LABEL: {
        if (action.data && action.data.label) {
            const { data: { label } } = action;
            return state.set('activeLabel', fromJS(label));
        }
        return state;
    }
    case types.UPDATE_ACTIVE_LABEL: {
        if (action.data && action.data.label) {
            const { data: { label } } = action;
            return state.set(
                'activeLabel',
                state.get('activeLabel').merge(label)
            );
        }
        return state;
    }
    case types.CLEAR_LABELS: {
        return state
            .set('didInitialize', false)
            .set('collectionLabels', List([]));
    }
    default:
        return state;
    }
});
