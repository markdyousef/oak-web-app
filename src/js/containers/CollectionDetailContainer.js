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

const removeSeed = gql`
    mutation removeSeed($id: ID!) {
        removeSeed(id: $id)
    }
`;

const likeSeed = gql`
    mutation likeSeed($id: ID!) {
        likeSeed(id: $id)
    }
`;

const unlikeSeed = gql`
    mutation unlikeSeed($id: ID!) {
        unlikeSeed(id: $id)
    }
`;

export default compose(
    graphql(getCollection, {
        name: 'data',
        options: ownProps => ({ variables: { groveId: ownProps.params.collectionId } })
    }),
    graphql(removeSeed, {
        props: ({ mutate }) => ({
            removeCard: (id:String) => mutate({ variables: { id } })
        })
    }),
    graphql(likeSeed, {
        props: ({ mutate }) => ({
            likeCard: (id:String) => mutate({ variables: { id } })
        })
    }),
    graphql(unlikeSeed, {
        props: ({ mutate }) => ({
            unlikeCard: (id:String) => mutate({ variables: { id } })
        })
    })
)(CollectionDetail);
