/* eslint-disable no-undef */
import * as channel from '../channel';

describe('ACTIONS - channel', () => {
    describe('getChannel', () => {
        it('should return channel data', () => {
            const id = 'id';
            const data = {};
            const action = channel.getChannel(id);
            expect(action).toEqual({
                type: 'GET_CHANNEL_SUCCESS',
                data
            });
        });
    });
});
