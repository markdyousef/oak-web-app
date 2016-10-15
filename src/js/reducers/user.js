import Immutable from 'immutable';

const inititalState = Immutable.Map({
    isLoading: false,
    message: null,
    user: {}
});

export default (state = inititalState, action) => {
    if (action.type === 'user/REQUEST_DATA') {
        return state.set('isLoading', true);
    }
    if (action.type === 'user/RECEIVE_USER') {
        return state.merge({
            isLoading: false,
            message: null,
            user: action.user
        });
    }
    if (action.type === 'user/CLEAR_MESSAGE') {
        return state.merge({
            message: null
        });
    }
    return state;
};
