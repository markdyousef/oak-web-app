import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import TopNav from '../components/TopNav';

const getUser = gql`
    query me {
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
    graphql(getUser),
    graphql(logout, {
        props: ({ mutate }) => ({
            logout: () => mutate()
        })
    })
)(TopNav);
