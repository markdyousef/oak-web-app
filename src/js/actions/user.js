function requestData() {
    return {
        type: 'user/REQUEST_DATA'
    };
}

function receiveUser(user) {
    return {
        type: 'user/RECEIVE_USER',
        user
    };
}

function fetchUserInfo() {
    return (dispatch) => {
        dispatch(requestData());
        dispatch(receiveUser());
        dispatch(receiveUser({}));
    };
}

export default {
    fetchUserInfo
};
