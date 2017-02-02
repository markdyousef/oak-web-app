// @flow
/* eslint-disable no-undef */
import * as members from '../members';
import * as type from '../../constants/ActionTypes';

describe('ACTIONS - members', () => {
    describe('getMembers', () => {
        it('should return members data', () => {
            const name = 'doom';
            const data = [];
            const action = members.getMembers(name);
            expect(action).toEqual({
                type: type.RECEIVE_MEMBERS,
                team: name,
                data
            });
        });
    });
});
