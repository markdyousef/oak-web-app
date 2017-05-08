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
    it('should remove label from collection', () => {
        const labelId = '1234';
        const expectedAction = {
            type: types.REMOVE_COLLECTION_LABEL,
            data: { labelId }
        };
        expect(actions.removeCollectionLabel(labelId)).toEqual(expectedAction);
    });
});
