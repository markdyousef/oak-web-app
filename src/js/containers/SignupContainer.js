// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import SignUp from '../components/SignUp';

const createUser = gql`
    mutation createUser($email: !String, $password: !String) {
        createUser(email: $email, password: !String) {
        }
    }
`;


export default compose(
    graphql(createUser, {
        props: ({ mutate }) => ({
            createUser: (email, password) => mutate({ variables: { email, password } })
        })
    })
)(SignUp);
