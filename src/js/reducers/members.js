import Immutable from 'immutable';
import * as type from '../constants/ActionTypes';

const inititalState = Immutable.fromJS({
    isLoading: true,
    message: null,
    team: 'mastermind',
    members: Immutable.List([])
});

export default (state = inititalState, action) => {
    switch (action.type) {
    case type.RECEIVE_MEMBERS:
        return state
            .set('isLoading', false)
            .set('team', action.team)
            .set('members', Immutable.List(action.data));
    default:
        return state;
    }
};
