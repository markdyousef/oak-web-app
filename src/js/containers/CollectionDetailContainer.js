// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import CollectionDetail from '../components/CollectionDetail';

const getCollection = gql`
    query collection($groveId: ID!) {
        grove(id: $groveId) {
            id
            name
            description
            stats {
                seeds
            }
        }
        seeds(groveId: $groveId) {
            id
            content,
            creatorId,
            updatedAt,
            labels {
                id
                name
                color
            },
            comments {
                id
            }
        }
    }
`;

export default compose(
    graphql(getCollection, {
        name: 'data',
        options: ownProps => ({ variables: { groveId: ownProps.params.collectionId } })
    })
)(CollectionDetail);
