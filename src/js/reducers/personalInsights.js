import Immutable from 'immutable';
import * as type from '../constants/ActionTypes';

const inititalState = Immutable.fromJS({
    isLoading: false,
    message: null,
    data: Immutable.Map({}),
    otherData: Immutable.Map({})
});

export default (state = inititalState, action) => {
    switch (action.type) {
    case type.RECEIVE_INSIGHTS:
        return state
            .set('isLoading', false)
            .set('name', action.team)
            .set('data', Immutable.Map(action.data))
            .set('otherData', Immutable.Map(action.otherData));
    default:
        return state;
    }
};
