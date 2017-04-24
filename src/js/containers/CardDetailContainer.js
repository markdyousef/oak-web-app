// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import CardDetail from '../components/CardDetail';

const getCard = gql`
    query getCard($id: ID!) {
        seed(id: $id) {
            id
            content
            labels {
                id
            }
            comments {
                id
                text
                creator {
                    username
                }
                createdAt
            }
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

const addSeedLabel = gql`
    mutation addSeedLabel($seedId: ID!, $labelId: ID!) {
        addSeedLabel(seedId: $seedId, labelId: $labelId)
    }
`;

const removeSeedLabel = gql`
    mutation removeSeedLabel($seedId: ID!, $labelId: ID!) {
        removeSeedLabel(seedId: $seedId, labelId: $labelId)
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
            update: (id:string, content:string) => mutate({ variables: { id, content } })
        })
    }),
    graphql(addSeedLabel, {
        props: ({ mutate }) => ({
            addLabel: (seedId:string, labelId:string) => mutate({ variables: { seedId, labelId } })
        })
    }),
    graphql(removeSeedLabel, {
        props: ({ mutate }) => ({
            removeLabel: (seedId:string, labelId:string) => mutate({ variables: { seedId, labelId } })
        })
    }),
    graphql(createComment, {
        props: ({ mutate }) => ({
            createComment: (id:string, text:string) => mutate({ variables: { id, text } })
        })
    })
)(CardDetail);
