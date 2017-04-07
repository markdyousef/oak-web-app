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
            avatar {
                urlThumb512
            }
        }
    }
`;

const updateUser = gql`
    mutation updateUser($name: String, $avatarId: ID) {
        updateUser(name: $name, avatarId: $avatarId) {
            name
            avatar {
                urlThumb512
            }
        }
    }
`;

export default compose(
    graphql(getUser),
    graphql(updateUser, {
        props: ({ mutate }) => ({
            updateUser: (name:String, avatarId:String) => mutate({ variables: { name, avatarId } })
        })
    })
)(SettingsProfile);
