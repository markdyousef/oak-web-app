// @flow
import * as actions from './actions';
import * as types from '../constants/ActionTypes';

describe('actions', () => {
    it('should updateCard state', () => {
        const field = { key: 'isLoading', value: false };
        const expectedAction = {
            type: types.CARD_STATE,
            data: {
                field
            }
        };
        expect(actions.updateCard(field)).toEqual(expectedAction);
    });
    it('should reset Card state', () => {
        const expectedAction = {
            type: types.CLEAR_CARD
        };
        expect(actions.clearCard()).toEqual(expectedAction)
    });
});
