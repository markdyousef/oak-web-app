import * as channel from './channel';
import * as team from './team';
import * as members from './members';

export default {
    ...channel,
    ...team,
    ...members
};
