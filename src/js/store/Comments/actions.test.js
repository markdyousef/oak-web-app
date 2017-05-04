import * as actions from './actions';
import * as types from '../constants/ActionTypes';

describe('actions', () => {
    it('should updateComments on comments', () => {
        const field = { key: 'isLoading', value: false };
        const expectedAction = {
            type: types.COMMENTS_STATE,
            data: {
                field
            }
        };

        expect(actions.updateComments(field)).toEqual(expectedAction);
    });
});
