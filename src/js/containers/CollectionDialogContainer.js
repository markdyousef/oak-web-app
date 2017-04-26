// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import CollectionDialog from '../components/CollectionDialog';
import { getTeam } from '../utils';

const createGrove = gql`
    mutation createGrove($teamId: ID!, $name: String!, $description: String, $coverId: ID) {
        createGrove(teamId: $teamId, name: $name, description: $description, coverId: $coverId) {
            id
        }
    }
`;

const updateGrove = gql`
    mutation updateGrove($id: ID!, $name: String, $description: String, $coverId: ID) {
        updateGrove(id: $id, name: $name, description: $description, coverId: $coverId) {
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
            create: (name, description, coverId) => mutate({ variables: { teamId: getTeam(), name, description, coverId } })
        })
    }),
    graphql(updateGrove, {
        props: ({ mutate }) => ({
            update: (id, name, description, coverId) => mutate({ variables: { id, name, description, coverId } })
        })
    }),
    graphql(removeGrove, {
        props: ({ mutate }) => ({
            remove: id => mutate({ variables: { id } })
        })
    })
)(CollectionDialog);
