import Immutable from 'immutable';
import * as type from '../constants/ActionTypes';

const inititalState = Immutable.fromJS({
    isLoading: false,
    message: null,
    name: 'clai',
    channels: []
});

export default (state = inititalState, action) => {
    switch (action.type) {
    case type.RECEIVE_TEAM:
        return state
            .set('isLoading', false)
            .set('name', action.team)
            .set('channels', Immutable.List(action.data));
    default:
        return state;
    }
};
