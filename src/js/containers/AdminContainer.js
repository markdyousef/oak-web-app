// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Admin from '../components/Admin';

const createTeam = gql`
    mutation createTeam($name: String) {
        createTeam(name: $name)
    }
`;


export default compose(
    graphql(createTeam, {
        props: ({ mutate }) => ({
            createTeam: name => mutate({ variables: { name } })
        })
    })
)(Admin);
