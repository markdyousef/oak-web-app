// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import CollectionDialog from '../components/CollectionDialog';

const createGrove = gql`
    mutation createGrove($title: String!) {
        createGrove(title: $title) {
            id
        }
    }
`;

export default compose(
    graphql(createGrove, {
        props: ({ mutate }) => ({
            create: title => mutate({ variables: { title } })
        })
    })
)(CollectionDialog);
