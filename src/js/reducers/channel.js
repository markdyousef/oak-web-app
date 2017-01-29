import Immutable from 'immutable';

const inititalState = Immutable.fromJS({
    isLoading: false,
    message: null,
    name: 'general',
    messages: [],
    members: []
});

export default (state = inititalState, action) => {
    switch (action.type) {
    case 'RECEIVE_CHANNEL':
        return state
            .set('isLoading', false)
            .set('name', action.data.name)
            .set('messages', Immutable.List(action.data.messages))
            .set('members', Immutable.List(action.data.members));
    default:
        return state;
    }
};
