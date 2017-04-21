// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import ResetPassword from '../components/ResetPassword';

const resetPassword = gql`
    mutation resetPassword($token: String!, $password: String!) {
        resetPassword(token: $token, password: $password)
    }
`;

export default compose(
    graphql(resetPassword, {
        props: ({ mutate }) => ({
            resetPassword: (token, password) => mutate({ variables: { token, password } })
        })
    })
)(ResetPassword);
