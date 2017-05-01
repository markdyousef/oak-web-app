// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import CollectionDetail from '../components/CollectionDetail';
import { collections } from '../store/actions';

const getCollection = gql`
    query collection($groveId: ID!) {
        me {
            id
            likedSeeds {
                id
            }
        }
        grove(id: $groveId) {
            id
            name
            description
            labels {
                id
                name
                color
            }
            cover {
                id
                urlThumb512
            }
            stats {
                seeds
            }
        }
        seeds(groveId: $groveId) {
            id
            content
            cover {
                id
                urlThumb512
            }
            creator {
                id
                name
                username
                avatar {
                    id
                    urlThumb64
                }
                gravatar
            }
            updatedAt
            likes
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

const removeGrove = gql`
    mutation removeGrove($id: ID!) {
        removeGrove(id: $id)
    }
`;

const mapDispatchToProps = (dispatch: Function) => (
    {
        setUpdate: (shouldUpdate: bool) =>
            dispatch(collections.setUpdate(shouldUpdate))
    }
);

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
    }),
    graphql(removeGrove, {
        props: ({ mutate }) => ({
            remove: id => mutate({ variables: { id } })
        })
    }),
    connect(null, mapDispatchToProps)
)(CollectionDetail);
