import * as actions from './actions';
import * as types from '../constants/ActionTypes';

describe('actions', () => {
    it('should setState on card', () => {
        const field = { key: 'isLoading', value: false };
        const expectedAction = {
            type: types.CARD_STATE,
            data: {
                payload: field
            }
        };

        expect(actions.setState(field)).toEqual(expectedAction);
    });
});
