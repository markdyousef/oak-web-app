import Immutable from 'immutable';
import * as type from '../constants/ActionTypes';

const inititalState = Immutable.Map({
    isLoading: false,
    message: null,
    tone: {},
    insight: {}
});

export default (state = inititalState, action) => {
    switch (action.type) {
    case type.RECEIVE_USER:
        return state
            .set('tone', Immutable.Map(action.tone))
            .set('insight', Immutable.Map(action.insight));
    default:
        return state;
    }
};
