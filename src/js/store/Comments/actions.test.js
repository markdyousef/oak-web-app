import * as actions from './actions';
import * as types from '../constants/ActionTypes';

describe('actions', () => {
    it('should setState on comments', () => {
        const field = { key: 'isLoading', value: false };
        const expectedAction = {
            type: types.COMMENT_STATE,
            data: {
                payload: field
            }
        };

        expect(actions.setState(field)).toEqual(expectedAction);
    });
});
