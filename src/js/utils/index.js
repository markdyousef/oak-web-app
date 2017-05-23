import * as auth from './auth';
import * as team from './team';
import * as upload from './upload';
import * as editor from './editor';
import withAnalytics from './withAnalytics';

export default {
    ...auth,
    ...team,
    ...upload,
    ...editor,
    withAnalytics
};
