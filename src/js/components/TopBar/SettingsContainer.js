// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router';
import Settings from './Settings';
import withAnalytics from './TopBarAnalytics';

const getAvatar = gql`
    query getAvatar {
        me {
            id
            avatar {
                id
                urlThumb64
            }
            gravatar
        }
    }
`;

const logout = gql`
    mutation logoutUser {
        logoutUser
    }
`;

export default compose(
    graphql(getAvatar),
    graphql(logout, {
        props: ({ mutate }) => ({
            logout: () => mutate()
        })
    })
)(withRouter(withAnalytics(Settings)));
