import * as channel from './channel';
import * as team from './team';
import * as members from './members';
import * as personalInsights from './personalInsights';

export default {
    ...channel,
    ...team,
    ...members,
    ...personalInsights
};
