// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import CollectionDialog from '../components/CollectionDialog';
import { getTeam } from '../utils';

const createGrove = gql`
    mutation createGrove($teamId: ID!, $title: String!, $description: String) {
        createGrove(teamId: $teamId, title: $title, description: $description) {
            id
        }
    }
`;

export default compose(
    graphql(createGrove, {
        props: ({ mutate }) => ({
            create: (title, description) => mutate({ variables: { teamId: getTeam(), title, description } })
        })
    })
)(CollectionDialog);
