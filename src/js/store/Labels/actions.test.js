// @flow
import * as actions from './actions';
import * as types from '../constants/ActionTypes';

describe('actions', () => {
    it('should update labels state', () => {
        const field = { key: 'isLoading', value: false };
        const expectedAction = {
            type: types.LABELS_STATE,
            data: {
                field
            }
        };
        expect(actions.updateLabels(field)).toEqual(expectedAction);
    });
    it('should add label to card', () => {
        const labelId = '123';
        const expectedAction = {
            type: types.ADD_CARD_LABEL,
            data: { labelId }
        };
        expect(actions.addCardLabel(labelId)).toEqual(expectedAction);
    });
    it('should remove label from card', () => {
        const labelId = '1234';
        const expectedAction = {
            type: types.REMOVE_CARD_LABEL,
            data: { labelId }
        };
        expect(actions.removeCardLabel(labelId)).toEqual(expectedAction);
    });
    it('should add label to collection', () => {
        const label = { id: '123', color: '#000', name: 'cool' };
        const expectedAction = {
            type: types.ADD_COLLECTION_LABEL,
            data: { label }
        };
        expect(actions.addCollectionLabel(label)).toEqual(expectedAction);
    });
    it('should remove label from collectionLabels', () => {
        const labelId = '1234';
        const expectedAction = {
            type: types.REMOVE_COLLECTION_LABEL,
            data: { labelId }
        };
        expect(actions.removeCollectionLabel(labelId)).toEqual(expectedAction);
    });
    it('should update label in collectionLabels', () => {
        const label = { id: '123', color: '#000', name: 'cool' };
        const expectedAction = {
            type: types.UPDATE_COLLECTION_LABEL,
            data: { label }
        };
        expect(actions.updateCollectionLabel(label)).toEqual(expectedAction);
    });
    it('should set activeLabel', () => {
        const label = { name: 'label', color: '#000', id: '134' };
        const expectedAction = {
            type: types.EDIT_COLLECTION_LABEL,
            data: { label }
        };
        expect(actions.editCollectionLabel(label)).toEqual(expectedAction);
    });
    it('should update field in activeLabel', () => {
        const label = { name: 'coool' };
        const expectedAction = {
            type: types.UPDATE_ACTIVE_LABEL,
            data: { label }
        };
        expect(actions.updateActiveLabel(label)).toEqual(expectedAction);
    });
});
