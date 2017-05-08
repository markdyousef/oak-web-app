// @flow
import { List, fromJS } from 'immutable';
import { defineRecord } from '../types/record';
import type { Record } from '../types/record';
import * as types from '../constants/ActionTypes';

export type StateShape = {
    showLabels: bool,
    isLoading: bool,
    didInitialize: bool,
    labelName: ?string,
    message: ?Object,
    selectedColor: ?string,
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
    labelName: null,
    message: null,
    selectedColor: null,
    collectionLabels: List([]),
    cardLabels: List([]),
    page: 'ADD'
}: StateShape));

export const initialState: StateRecord = State({
    showLabels: false,
    isLoading: false,
    didInitialize: false,
    message: null,
    labelName: null,
    selectedColor: null,
    collectionLabels: List([]),
    cardLabels: List([]),
    page: 'ADD'
});

export default (state: StateRecord = initialState, action: Action): StateRecord => {
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
                state.get('collectionLabels').filter(label => label.id !== labelId)
            );
        }
        return state;
    }
    default:
        return state;
    }
};
