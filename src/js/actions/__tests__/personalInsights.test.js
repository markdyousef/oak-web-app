// @flow
/* eslint-disable no-undef */
import * as insights from '../personalInsights';
import * as type from '../../constants/ActionTypes';

describe('ACTIONS - personalInsights', () => {
    describe('getInsight', () => {
        it('should return insight data', () => {
            const team = 'mastermind';
            const userId = 'U0F1ZMA72';
            const data = require(`../../../data/${team}/users/${userId}_pi.json`);
            const action = insights.getInsight(team, userId);
            expect(action).toEqual({
                type: type.RECEIVE_INSIGHTS,
                userId,
                data
            });
        });
    });
});
