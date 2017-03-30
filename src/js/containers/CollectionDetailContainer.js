// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import CollectionDetail from '../components/CollectionDetail';

const getCards = gql`
    query seeds($groveId: ID!) {
        seeds(groveId: $groveId) {
            id
            content,
            creatorId,
            updatedAt,
            labels {
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
    graphql(getCards, {
        name: 'data',
        options: ownProps => ({ variables: { groveId: ownProps.params.collectionId } })
    })
)(CollectionDetail);
