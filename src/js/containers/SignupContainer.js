// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import SignUp from '../components/SignUp';

const createUser = gql`
    mutation createUser($name: String!, $email: String!, $password: String!, $inviteToken: String!) {
        createUser(name: $name, email: $email, password: $password, inviteToken: $inviteToken) {
            id
        }
    }
`;

export default compose(
    graphql(createUser, {
        props: ({ mutate }) => ({
            createUser: (name, email, password, inviteToken) => mutate({ variables: { name, email, password, inviteToken } })
        })
    })
)(SignUp);
