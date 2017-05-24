import * as collections from './Collections/actions';
import * as card from './Card/actions';
import * as comments from './Comments/actions';
import * as labels from './Labels/actions';
import { BATCH_ACTIONS } from './constants/ActionTypes';


// generic actions
const batchActions = (actions: Array<Object>) => (
    {
        type: BATCH_ACTIONS,
        data: { actions }
    }
);

export default {
    batchActions,
    collections,
    card,
    comments,
    labels
};
