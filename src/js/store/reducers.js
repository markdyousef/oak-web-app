import { combineReducers } from 'redux';
import collection from './Collections/reducers';
import card from './Card/reducers';
import comments from './Comments/reducers';

export default combineReducers({
    collection,
    card,
    comments
});
