// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { comments } from '../store/actions';
import { Comments, wrapper } from '../components/Comments';


const getComments = gql`
    query getComments($id: ID!) {
        seed(id: $id) {
            id
            comments {
                id
                text
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
                createdAt
            }
        }
    }
`;

const createComment = gql`
    mutation createComment($id: ID!, $text: String!) {
        createComment(seedId: $id, text: $text) {
            id
            text
            createdAt
            creator {
                name
                username
                avatar {
                    id
                    urlThumb64
                }
                gravatar
            }
            createdAt
        }
    }
`;

const mapStateToProps = (state: Object) => {
    return {
        cardId: state.card.get('cardId'),
        comments: state.comments
    };
};

type Field = {
    key: string,
    value: string
}

const mapDispatchToProps = (dispatch: Function) => (
    {
        updateComments: (field: Field) =>
            dispatch(comments.updateComments(field))
    }
);

const WrappedComponent = wrapper(Comments);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    graphql(getComments, {
        name: 'data',
        skip: props => !props.cardId,
        options: props => ({ variables: { id: props.cardId } })
    }),
    graphql(createComment, {
        props: ({ mutate }) => ({
            createComment: (id:string, text:string) => mutate({ variables: { id, text } })
        })
    })
)(WrappedComponent);
