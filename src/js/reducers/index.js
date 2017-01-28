import { combineReducers } from 'redux';

import user from './user';
import team from './team';

export default combineReducers({
    user,
    team
});
