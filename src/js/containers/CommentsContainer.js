// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Comments from '../components/Comments';

const getSeed = gql`
    query seed($id: ID!) {
        seed(id: $id) {
            comments {
                id
                text
                creatorId
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
            creatorId
            createdAt
        }
    }
`;

export default compose(
    graphql(getSeed, {
        name: 'data',
        options: ownProps => ({ variables: { id: ownProps.cardId } })
    }),
    graphql(createComment, {
        props: ({ mutate }) => ({
            create: (id:String, text:String) => mutate({ variables: { id, text } })
        })
    })
)(Comments);
