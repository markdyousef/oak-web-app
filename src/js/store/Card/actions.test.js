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
});
