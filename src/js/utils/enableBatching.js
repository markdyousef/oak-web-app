// Higher order function to enable batching for Redux reducers
import { BATCH_ACTIONS } from '../store/constants/ActionTypes';

export default (reducer) => {
    return function batchingReducer(state, action) {
        switch (action.type) {
        case BATCH_ACTIONS:
            if (action.data && action.data.actions) {
                const { data: { actions } } = action;
                return actions.reduce(reducer, state);
            }
            return reducer(state, action);
        default:
            return reducer(state, action);
        }
    };
};
