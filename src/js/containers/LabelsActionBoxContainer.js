// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { card, labels } from '../store/actions';
import LabelsActionBox from '../components/LabelsActionBox';

const createLabel = gql`
    mutation createLabel($groveId: ID!, $name: String!, $color: String!) {
        createLabel(groveId: $groveId, name: $name, color: $color) {
            id
            name
            color
        }
    }
`;

const getCollectionLabels = gql`
    query grove($id: ID!) {
        grove(id: $id) {
            labels {
                id
                name
                color
            }
        }
    }
`;

const getCardLabels = gql`
    query seed($id: ID!) {
        seed(id: $id) {
            id
            labels {
                id
            }
        }
    }
`;

const createCard = gql`
    mutation createSeed($groveId: ID!, $name: String!) {
        createSeed(groveId: $groveId, name: $name) {
            id
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

const mapStateToProps = (state: Object) => (
    {
        cardId: state.card.get('cardId'),
        collectionId: state.card.get('collectionId'),
        labels: state.labels
    }
);

type Field = {
    key: string,
    value: string
}
const mapDispatchToProps = (dispatch: Function) => (
    {
        updateCard: (field: Field) =>
            dispatch(card.updateCard(field)),
        updateLabels: (field: Field) =>
            dispatch(labels.updateLabels(field)),
        create: (label: Object) => {
            dispatch(labels.addCollectionLabel(label));
            dispatch(labels.updateLabels({
                key: 'labelName',
                value: null
            }));
            dispatch(labels.updateLabels({
                key: 'page',
                value: 'ADD'
            }));
        },
        delete: (labelId: string) => {
            dispatch(labels.removeCollectionLabel(labelId));
            dispatch(labels.removeCardLabel(labelId));
        },
        attach: (labelId: string) =>
            dispatch(labels.addCardLabel(labelId)),
        detach: (labelId: string) =>
            dispatch(labels.removeCardLabel(labelId))
    }
);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    graphql(getCollectionLabels, {
        name: 'collection',
        options: ownProps => ({ variables: { id: ownProps.collectionId } })
    }),
    graphql(getCardLabels, {
        name: 'card',
        skip: props => !props.cardId,
        options: ownProps => ({ variables: { id: ownProps.cardId } })
    }),
    graphql(createLabel, {
        props: ({ mutate }) => ({
            createLabel: (groveId:string, name:string, color:string) => mutate({ variables: { groveId, name, color } })
        })
    }),
    graphql(createCard, {
        props: ({ mutate }) => ({
            createCard: (groveId, name) => mutate({ variables: { groveId, name } })
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
)(LabelsActionBox);
