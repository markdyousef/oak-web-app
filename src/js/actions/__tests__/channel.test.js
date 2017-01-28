/* eslint-disable no-undef */
import * as channel from '../channel';

describe('ACTIONS - channel', () => {
    describe('getChannel', () => {
        it('should return channel data', () => {
            const team = 'mastermind';
            const id = 'id';
            const data = {};
            const action = channel.getChannel(team, id);
            expect(action).toEqual({
                type: 'GET_CHANNEL_SUCCESS',
                data
            });
        });
    });
    describe('getChannelMessages', () => {
        it('should return channel messages', () => {
            const team = 'mastermind';
            const name = 'general';
            const data = {};
            const action = channel.getChannelMessages(team, name);
            expect(action).toEqual({
                type: 'GET_MESSAGES_SUCCESS',
                data
            });
        });
    });
});
