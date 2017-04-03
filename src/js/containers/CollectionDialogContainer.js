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

const updateGrove = gql`
    mutation updateGrove($id: ID!, $name: String, $description: String) {
        updateGrove(id: $id, name: $name, description: $description) {
            id
        }
    }
`;

const removeGrove = gql`
    mutation removeGrove($id: ID!) {
        removeGrove(id: $id)
    }
`;

export default compose(
    graphql(createGrove, {
        props: ({ mutate }) => ({
            create: (name, description) => mutate({ variables: { teamId: getTeam(), name, description } })
        })
    }),
    graphql(updateGrove, {
        props: ({ mutate }) => ({
            update: (id, name, description) => mutate({ variables: { id, name, description } })
        })
    }),
    graphql(removeGrove, {
        props: ({ mutate }) => ({
            remove: id => mutate({ variables: { id } })
        })
    })
)(CollectionDialog);
