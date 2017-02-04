import Immutable from 'immutable';
import * as type from '../constants/ActionTypes';

const inititalState = Immutable.fromJS({
    isLoading: false,
    message: null,
    insight: Immutable.Map({}),
    tone: Immutable.Map({}),
    insightOther: Immutable.Map({}),
    toneOther: Immutable.Map({})
});

export default (state = inititalState, action) => {
    switch (action.type) {
    case type.RECEIVE_INSIGHTS:
        return state
            .set('isLoading', false)
            .set('insight', Immutable.Map(action.insight))
            .set('insightOther', Immutable.Map(action.insightOther))
            .set('tone', Immutable.Map(action.tone))
            .set('toneOther', Immutable.Map(action.toneOther));
    default:
        return state;
    }
};
