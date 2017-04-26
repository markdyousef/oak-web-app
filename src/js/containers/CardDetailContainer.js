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
                    name
                    username
                    avatar {
                        urlThumb64
                    }
                    gravatar
                }
                createdAt
            }
        }
    }
`;

const createSeed = gql`
    mutation createSeed($groveId: ID!, $name: String!, $content: String, $coverId: ID) {
        createSeed(groveId: $groveId, name: $name, content: $content, coverId: $coverId) {
            id
            content
        }
    }
`;

const updateSeed = gql`
    mutation updateSeed($id: ID!, $content: String!, $coverId: ID) {
        updateSeed(id: $id, content: $content, coverId: $coverId) {
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
            createdAt
            creator {
                name
                username
                avatar {
                    urlThumb64
                }
                gravatar
            }
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
            create: (groveId: string, name: string, content: string, coverId) => mutate({ variables: { groveId, name, content, coverId } })
        })
    }),
    graphql(updateSeed, {
        props: ({ mutate }) => ({
            update: (id:string, content:string, coverId:string) => mutate({ variables: { id, content, coverId } })
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
