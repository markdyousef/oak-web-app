// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import CollectionDetail from '../components/CollectionDetail';
import { card } from '../store/actions';

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

const removeGrove = gql`
    mutation removeGrove($id: ID!) {
        removeGrove(id: $id)
    }
`;

const mapStateToProps = (state:Object) => (
    {
        shouldUpdate: state.card.get('shouldUpdate')
    }
);

const mapDispatchToProps = (dispatch: Function) => (
    {
        updateCard: (field:Object) => dispatch(card.updateCard(field))
    }
);

export default compose(
    graphql(getCollection, {
        name: 'data',
        options: ownProps => ({ variables: { groveId: ownProps.params.collectionId } })
    }),
    graphql(removeGrove, {
        props: ({ mutate }) => ({
            remove: id => mutate({ variables: { id } })
        })
    }),
    connect(mapStateToProps, mapDispatchToProps)
)(CollectionDetail);
