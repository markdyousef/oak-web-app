import Immutable from 'immutable';
import * as type from '../constants/ActionTypes';

const inititalState = Immutable.fromJS({
    isLoading: true,
    message: null,
    team: 'clai',
    channels: Immutable.List([]),
    activeChannel: Immutable.Map({})
});

export default (state = inititalState, action) => {
    switch (action.type) {
    case type.RECEIVE_CHANNEL:
        return state
            .set('isLoading', false)
            .set('team', action.team)
            .set('activeChannel', Immutable.Map(action.data));
    case type.RECEIVE_CHANNELS:
        return state
            .set('isLoading', false)
            .set('team', action.team)
            .set('channels', Immutable.List(action.data));
    default:
        return state;
    }
};
