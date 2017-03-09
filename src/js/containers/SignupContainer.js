// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import SignUp from '../components/SignUp';

const createUser = gql`
    mutation createUser($name: String!, $email: String!, $password: String!) {
        createUser(name: $name, email: $email, password: $password) {
            id
        }
    }
`;

export default compose(
    graphql(createUser, {
        props: ({ mutate }) => ({
            createUser: (name, email, password) => mutate({ variables: { name, email, password } })
        })
    })
)(SignUp);
