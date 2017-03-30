// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import CollectionDialog from '../components/CollectionDialog';
import { getTeam } from '../utils';

const createGrove = gql`
    mutation createGrove($teamId: ID!, $name: String!, $description: String) {
        createGrove(teamId: $teamId, name: $name, description: $description) {
            id
        }
    }
`;

export default compose(
    graphql(createGrove, {
        props: ({ mutate }) => ({
            create: (name, description) => mutate({ variables: { teamId: getTeam(), name, description } })
        })
    })
)(CollectionDialog);
