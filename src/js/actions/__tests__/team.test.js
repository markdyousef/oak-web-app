/* eslint-disable no-undef */
import * as team from '../team';

describe('ACTIONS - team', () => {
    describe('getTeam', () => {
        it('should return team data', () => {
            const name = 'doom';
            const data = [];
            const action = team.getTeam(name);
            expect(action).toEqual({
                type: 'RECEIVE_TEAM',
                team: name,
                data
            });
        });
    });
});
