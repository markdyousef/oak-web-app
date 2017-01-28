import Immutable from 'immutable';

const inititalState = Immutable.fromJS({
    isLoading: false,
    message: null,
    name: null,
    channels: []
});

export default (state = inititalState, action) => {
    switch (action.type) {
    case 'RECEIVE_TEAM':
        return state
            .set('isLoading', false)
            .set('name', action.team)
            .set('channels', Immutable.List(action.data));
    default:
        return state;
    }
};
