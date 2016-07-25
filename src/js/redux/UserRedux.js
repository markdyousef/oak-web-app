import Immutable from 'immutable';


/*
    Types
*/

const REQUEST_DATA = 'user/REQUEST_DATA';
const RECEIVE_USER = 'user/RECEIVE_USER';
const CLEAR_MESSAGE = 'user/CLEAR_MESSAGE';


/*
    Reducer
*/

const inititalState = Immutable.Map({
    isLoading: false,
    message: null,
    user: {}
});

export default (state = inititalState, action) => {
    if (action.type === REQUEST_DATA) {
        return state.set('isLoading', true);
    }

    if (action.type === RECEIVE_USER) {
        return state.merge({
            isLoading: false,
            message: null,
            user: action.user
        });
    }

    if (action.type === CLEAR_MESSAGE) {
        return state.merge({
            message: null
        });
    }

    return state;
};


/**
* User Actions
*/

export function requestData() {
    return {
        type: REQUEST_DATA
    };
}

export function receiveUser(user) {
    return {
        type: RECEIVE_USER,
        user
    };
}

export function fetchUserInfo() {
    return (dispatch) => {
        dispatch(receiveUser());
        dispatch(receiveUser({}));
    };
}
