// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { card, comments } from '../store/actions';
import { CardDetail, wrapper } from '../components/CardDetail';

const getCard = gql`
    query getCard($id: ID!) {
        me {
            id
            name
            username
            avatar {
                id
                urlThumb64
            }
            gravatar
        }
        seed(id: $id) {
            id
            content
            labels {
                id
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


type Field = {
    key: string,
    value: string
}

type OwnProps = {
    params: {
        cardId? : string,
        collectionId?: string
    },
    updateCard?: (field: Field) => void
}


const mapStateToProps = (state: Object) => {
    return {
        card: state.card,
        comments: state.comments
    };
};

const mapDispatchToProps = (dispatch: Function) => (
    {
        updateCard: (field:Field) =>
            dispatch(card.updateCard(field)),
        updateComments: (field: Field) =>
            dispatch(comments.updateComments(field))
    }
);

const WrappedCompoenent = wrapper(CardDetail);

export default compose(
    graphql(getCard, {
        name: 'data',
        skip: props => !props.params.cardId,
        options: props => ({ variables: { id: props.params.cardId } })
    }),
    graphql(createSeed, {
        props: ({ mutate }) => ({
            create: (groveId, name, content, coverId) => mutate({ variables: { groveId, name, content, coverId } })
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
    connect(mapStateToProps, mapDispatchToProps),
)(WrappedCompoenent);
