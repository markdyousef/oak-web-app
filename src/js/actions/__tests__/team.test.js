/* eslint-disable no-undef */
import * as team from '../team';
import * as type from '../../constants/ActionTypes';

describe('ACTIONS - team', () => {
    describe('getTeam', () => {
        it('should return team data', () => {
            const name = 'doom';
            const data = [];
            const action = team.getTeam(name);
            expect(action).toEqual({
                type: type.RECEIVE_TEAM,
                team: name,
                data
            });
        });
    });
});
