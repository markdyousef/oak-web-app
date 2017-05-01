import { combineReducers } from 'redux';
import collection from './Collections/reducers';
import card from './Card/reducers';

export default combineReducers({
    collection,
    card
});
