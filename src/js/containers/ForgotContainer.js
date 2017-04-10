// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Forgot from '../components/Forgot';

const requestResetPassword = gql`
    mutation requestResetPassword($email: String!) {
        requestResetPassword(email: $email)
    }
`;


export default compose(
    graphql(requestResetPassword, {
        props: ({ mutate }) => ({
            resetPassword: (email:String) => mutate({ variables: { email } })
        })
    })
)(Forgot);
