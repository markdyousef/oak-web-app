// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Admin from '../components/Admin';

const getTeams = gql`
    query teams {
        teams {
            id
            name
            role
        }
    }
`;

const createTeam = gql`
    mutation createTeam($name: String!) {
        createTeam(name: $name) {
            name
        }
    }
`;

export default compose(
    graphql(getTeams),
    graphql(createTeam, {
        props: ({ mutate }) => ({
            createTeam: name => mutate({ variables: { name } })
        })
    })
)(Admin);
