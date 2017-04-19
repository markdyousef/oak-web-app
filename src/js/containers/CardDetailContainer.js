// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import CardDetail from '../components/CardDetail';

const getCard = gql`
    query getCard($id: ID!) {
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
            content
        }
    }
`;

const updateSeed = gql`
    mutation updateSeed($id: ID!, $content: String!) {
        updateSeed(id: $id, content: $content) {
            id
            content
        }
    }
`;

export default compose(
    graphql(getCard, {
        name: 'data',
        skip: props => !props.params.cardId,
        options: props => ({ variables: { id: props.params.cardId } })
    }),
    graphql(createSeed, {
        props: ({ mutate }) => ({
            create: (groveId: string, content: string) => mutate({ variables: { groveId, content } })
        })
    }),
    graphql(updateSeed, {
        props: ({ mutate }) => ({
            update: (id, content) => mutate({ variables: { id, content } })
        })
    })
)(CardDetail);
