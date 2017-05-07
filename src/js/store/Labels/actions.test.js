import * as actions from './actions';
import * as types from '../constants/ActionTypes';

describe('actions', () => {
    it('should updateLabels state', () => {
        const field = { key: 'isLoading', value: false };
        const expectedAction = {
            type: types.LABELS_STATE,
            data: {
                field
            }
        };

        expect(actions.updateLabels(field)).toEqual(expectedAction);
    });
});
