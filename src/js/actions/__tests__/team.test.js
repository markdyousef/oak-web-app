/* eslint-disable no-undef */
import * as channel from '../channel';

describe('ACTIONS - channel', () => {
    describe('getTeam', () => {
        it('should return team data', () => {
            const team = 'mastermind';
            const data = {};
            const action = channel.getChannel(team);
            expect(action).toEqual({
                type: 'GET_TEAM_SUCCESS',
                data
            });
        });
    });
});
