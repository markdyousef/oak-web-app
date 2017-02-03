import { combineReducers } from 'redux';

import user from './user';
import team from './team';
import channel from './channel';
import members from './members';
import insights from './personalInsights';

export default combineReducers({
    user,
    team,
    channel,
    members,
    insights
});
