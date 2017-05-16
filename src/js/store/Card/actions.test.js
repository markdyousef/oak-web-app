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
    it('should update card with data received from server', () => {
        const card = {
            id: '123',
            name: 'content'
        };
        const expectedAction = {
            type: types.SET_CARD,
            data: { card }
        }
        expect(actions.setCard(card)).toEqual(expectedAction);
    });
    it('should update card with received content', () => {
        const content = '{string of something}';
        const expectedAction = {
            type: types.SET_CARD_CONTENT,
            data: { content }
        };
        expect(actions.setCardContent(content)).not.toEqual(expectedAction);
    });
    it('should return image with SET_CARD_IMAGE', () => {
        const image = {};
        const expectedAction = {
            type: types.SET_CARD_IMAGE,
            data: { image }
        };
        expect(actions.addCardImage(image)).toEqual(expectedAction);
    })
});
