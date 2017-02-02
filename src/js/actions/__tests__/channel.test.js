// @flow
/* eslint-disable no-undef */
import * as channel from '../channel';
import * as type from '../../constants/ActionTypes';

describe('ACTIONS - channel', () => {
    describe('getChannel', () => {
        it('should return channel data', () => {
            const team = 'doom';
            const id = 'id';
            const data = {};
            const action = channel.getChannel(team, id);
            expect(action).toEqual({
                type: type.RECEIVE_CHANNEL,
                data,
                team
            });
        });
    });
    describe('getChannels', () => {
        it('should return channels', () => {
            const team = 'doom';
            const data = [];
            const action = channel.getChannels(team);
            expect(action).toEqual({
                type: type.RECEIVE_CHANNELS,
                data,
                team
            });
        });
    });
});
