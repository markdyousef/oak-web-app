// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import SettingsProfile from '../components/SettingsProfile';

const getUser = gql`
    query me {
        me {
            id
            name
            username
            gravatar
            avatar {
                urlThumb512
            }
        }
    }
`;

const updateUser = gql`
    mutation updateUser($name: String, $username: String, $avatarId: ID) {
        updateUser(name: $name, username: $username, avatarId: $avatarId) {
            name
        }
    }
`;

export default compose(
    graphql(getUser),
    graphql(updateUser, {
        props: ({ mutate }) => ({
            updateUser: (name, username, avatarId) => mutate({ variables: { name, username, avatarId } })
        })
    })
)(SettingsProfile);
