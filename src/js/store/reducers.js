import { combineReducers } from 'redux';
import collection from './Collections/reducers';
import card from './Card/reducers';
import comments from './Comments/reducers';
import client from '../config/apollo';

export default combineReducers({
    collection,
    card,
    comments,
    apollo: client.reducer()
});
