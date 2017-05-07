// @flow
import { List, fromJS } from 'immutable';
import { defineRecord } from '../types/record';
import type { Record } from '../types/record';
import * as types from '../constants/ActionTypes';

type StateShape = {
    isLoading: bool,
    name: ?string,
    selectedColor: ?string,
    collectionLabels: Object,
    cardLabels: Object,
    page: 'ADD' | 'EDIT' | 'CHANGE'
}

export type Action = {
    type?: string,
    data?: Object
}

export type StateRecord = Record<StateShape>;

const State = defineRecord('State', ({
    isLoading: false,
    name: null,
    selectedColor: null,
    collectionLabels: List([]),
    cardLabels: List([]),
    page: 'ADD'
}: StateShape));

export const initialState: StateRecord = State({
    isLoading: false,
    name: null,
    selectedColor: null,
    collectionLabels: List([]),
    cardLabels: List([]),
    page: 'ADD'
})

export default (state: StateRecord = initialState, action: Action): StateRecord => {
    switch (action.type) {
    case types.LABELS_STATE: {
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
