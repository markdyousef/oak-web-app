// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import CardDetail from '../components/CardDetail';

const getCard = gql`
    query card($id: ID!) {
        seed(id: $id) {
            id
            content
        }
    }
`;

const createSeed = gql`
    mutation createSeed($groveId: ID!, $content: String!) {
        createSeed(groveId: $groveId, content: $content) {
            id
        }
    }
`;

const updateSeed = gql`
    mutation updateSeed($id: ID!, $content: String!) {
        updateSeed(id: $id, content: $content) {
            id
        }
    }
`;


export default compose(
    graphql(getCard, {
        name: 'data',
        options: ownProps => ({ variables: { id: ownProps.params.cardId } })
    }),
    graphql(createSeed, {
        props: ({ mutate }) => ({
            create: (groveId: String, content: String) => mutate({ variables: { groveId, content } })
        })
    }),
    graphql(updateSeed, {
        props: ({ mutate }) => ({
            update: (id, content) => mutate({ variables: { id, content } })
        })
    })
)(CardDetail);
