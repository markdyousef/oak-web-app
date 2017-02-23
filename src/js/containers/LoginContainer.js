// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Login from '../components/Login';

const loginUser = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password)
    }
`;


export default compose(
    graphql(loginUser, {
        props: ({ mutate }) => ({
            loginUser: (email, password) => mutate({ variables: { email, password } })
        })
    })
)(Login);
