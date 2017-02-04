import * as user from './user';
import * as channel from './channel';
import * as team from './team';
import * as members from './members';
import * as personalInsights from './personalInsights';

export default {
    ...user,
    ...channel,
    ...team,
    ...members,
    ...personalInsights
};
