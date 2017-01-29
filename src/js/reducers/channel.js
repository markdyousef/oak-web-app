import Immutable from 'immutable';

const inititalState = Immutable.fromJS({
    isLoading: true,
    message: null,
    name: 'general',
    data: Immutable.Map({})
});

export default (state = inititalState, action) => {
    switch (action.type) {
    case 'RECEIVE_CHANNEL':
        return state
            .set('isLoading', false)
            .set('name', action.data.name)
            .set('data', Immutable.Map(action.data));
    default:
        return state;
    }
};
