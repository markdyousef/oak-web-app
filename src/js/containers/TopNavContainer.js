import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { getTeam } from '../utils';
import TopNav from '../components/TopNav';

const getTopNav = gql`
    query topNav($teamId: ID!) {
        groves(teamId: $teamId) {
            id
            name
        }
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
    graphql(getTopNav, {
        name: 'data',
        options: () => ({ variables: { teamId: getTeam() } })
    }),
    graphql(logout, {
        props: ({ mutate }) => ({
            logout: () => mutate()
        })
    })
)(TopNav);
