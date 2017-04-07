// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import SettingsAccount from '../components/SettingsAccount';

const updatePassword = gql`
    mutation updatePassword($oldPassword: String!, $newPassword: String!) {
        updatePassword(oldPassword: $oldPassword, newPassword: $newPassword)
    }
`;

export default compose(
    graphql(updatePassword, {
        props: ({ mutate }) => ({
            updatePassword: (oldPassword:String, newPassword:String) => mutate({ variables: { oldPassword, newPassword } })
        })
    })
)(SettingsAccount);
