// @flow
/* eslint-disable no-undef */
import * as channel from '../channel';
import * as type from '../../constants/ActionTypes';

describe('ACTIONS - channel', () => {
    describe('getChannel', () => {
        it('should return channel data', () => {
            const team = 'mastermind';
            const id = 'C0F1Z5GR5';
            let data = require(`../../../data/${team}/channels/channels.json`);
            let tone = {}
            const action = channel.getChannel(team, id);
            // expect(action).toEqual({
            //     type: type.RECEIVE_CHANNEL,
            //     data,
            //     team,
            //     tone
            // });
        });
    });
    describe('getChannels', () => {
        it('should return channels', () => {
            const team = 'mastermind';
            let data = require(`../../../data/${team}/channels/channels.json`);
            const action = channel.getChannels(team);
            // expect(action).toEqual({
            //     type: type.RECEIVE_CHANNELS,
            //     data,
            //     team
            // });
        });
    });
});
