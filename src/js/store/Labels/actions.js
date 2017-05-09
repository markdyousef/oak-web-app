// @flow
import * as types from '../constants/ActionTypes';
import type { Action } from './reducers';

type Field = {
    key: string,
    value: any
}

export const updateLabels = (field: Field): Action => (
    {
        type: types.LABELS_STATE,
        data: {
            field
        }
    }
);


export const addCardLabel = (labelId: string): Action => (
    {
        type: types.ADD_CARD_LABEL,
        data: {
            labelId
        }
    }
);

export const removeCardLabel = (labelId: string): Action => (
    {
        type: types.REMOVE_CARD_LABEL,
        data: {
            labelId
        }
    }
);

export const addCollectionLabel = (label: Object): Action => (
    {
        type: types.ADD_COLLECTION_LABEL,
        data: {
            label
        }
    }
);

export const removeCollectionLabel = (labelId: string): Action => (
    {
        type: types.REMOVE_COLLECTION_LABEL,
        data: {
            labelId
        }
    }
);

export const updateCollectionLabel = (label: Object): Action => (
    {
        type: types.UPDATE_COLLECTION_LABEL,
        data: {
            label
        }
    }
);

export const editCollectionLabel = (label: Object): Action => (
    {
        type: types.EDIT_COLLECTION_LABEL,
        data: {
            label
        }
    }
);

export const updateActiveLabel = (label: Object): Action => (
    {
        type: types.UPDATE_ACTIVE_LABEL,
        data: {
            label
        }
    }
);
