// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { card, labels, batchActions } from '../store/actions';
import LabelsActionBox from '../components/LabelsActionBox';

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

const createLabel = gql`
    mutation createLabel($groveId: ID!, $name: String!, $color: String!) {
        createLabel(groveId: $groveId, name: $name, color: $color) {
            id
            name
            color
        }
    }
`;

const updateLabel = gql`
    mutation updateLabel($id: ID!, $name: String!, $color: String!) {
        updateLabel(id: $id, name: $name, color: $color) {
            id
            name
            color
        }
    }
`;

const removeLabel = gql`
    mutation removeLabel($id: ID!) {
        removeLabel(id: $id)
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

const mapStateToProps = (state: Object) => {
    return {
        cardId: state.card.get('cardId'),
        collectionId: state.card.get('collectionId'),
        card: state.card,
        labels: state.labels
    };
};

type Field = {
    key: string,
    value: string
}
const mapDispatchToProps = (dispatch: Function) => (
    {
        updateCard: (field: Field) =>
            dispatch(card.updateCard(field)),
        update: (field: Field) =>
            dispatch(labels.updateLabels(field)),
        create: (label: Object) => {
            dispatch(batchActions([
                labels.addCollectionLabel(label),
                labels.updateActiveLabel({
                    name: '',
                    color: ''
                }),
                labels.updateLabels({
                    key: 'page',
                    value: 'ADD'
                })
            ]));
        },
        delete: (labelId: string) => {
            dispatch(batchActions([
                labels.removeCollectionLabel(labelId),
                labels.removeCardLabel(labelId),
                labels.updateLabels({
                    key: 'page',
                    value: 'ADD'
                })
            ]));
        },
        attach: (labelId: string) => {
            dispatch(labels.addCardLabel(labelId));
            dispatch(card.updateCard({
                key: 'shouldUpdate',
                value: true
            }));
        },
        detach: (labelId: string) =>
            dispatch(labels.removeCardLabel(labelId)),
        editLabel: (label: Object) => {
            dispatch(batchActions([
                labels.editCollectionLabel(label),
                labels.updateLabels({
                    key: 'page',
                    value: 'EDIT'
                })
            ]));
        },
        updateActiveLabel: (label: Object) =>
            dispatch(labels.updateActiveLabel(label)),
        updateLabel: (label: Object) => {
            dispatch(batchActions([
                labels.updateCollectionLabel(label),
                labels.updateLabels({
                    key: 'page',
                    value: 'ADD'
                })
            ]));
        },
        clearLabels: () => dispatch(labels.clearLabels())
    }
);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    graphql(getCollectionLabels, {
        name: 'collectionLabels',
        options: ownProps => ({ variables: { id: ownProps.collectionId } })
    }),
    graphql(getCardLabels, {
        name: 'cardLabels',
        skip: props => !props.cardId,
        options: ownProps => ({ variables: { id: ownProps.cardId } })
    }),
    // Create label in collection
    graphql(createLabel, {
        props: ({ ownProps, mutate }) => ({
            createLabel: (groveId:string, name:string, color:string) =>
                mutate({ variables: { groveId, name, color } })
                    .then((res) => {
                        const label = res.data.createLabel;
                        ownProps.create({
                            name: label.name,
                            color: label.color,
                            id: label.id
                        });
                    })
                    .catch(() => {
                        const message = {
                            type: 'error',
                            message: "We couldn't create your label"
                        };
                        ownProps.update({
                            key: 'message',
                            value: message
                        });
                    })
        })
    }),
    // Create card if cardId doesn't exist
    graphql(createCard, {
        props: ({ ownProps, mutate }) => ({
            createCard: (groveId, name) =>
                mutate({ variables: { groveId, name } })
                    .then((res) => {
                        const id = res.data.createSeed.id;
                        ownProps.updateCard({
                            key: 'cardId',
                            value: id
                        });
                        return id;
                    })
                    .catch(() => {
                        const message = {
                            type: 'error',
                            message: "We couldn't create your label"
                        };
                        ownProps.update({
                            key: 'message',
                            value: message
                        });
                    })
        })
    }),
    // update collectionslabel
    graphql(updateLabel, {
        props: ({ ownProps, mutate }) => ({
            updateLabel: (id, name, color) =>
                mutate({ variables: { id, name, color } })
                    .then((res) => {
                        const label = res.data.updateLabel;
                        ownProps.updateLabel({
                            id: label.id,
                            name: label.name,
                            color: label.color
                        });
                    })
                    .catch(() => {
                        const message = {
                            type: 'error',
                            message: "We couldn't create your label"
                        };
                        ownProps.update({
                            key: 'message',
                            value: message
                        });
                    })
        })
    }),
    // remove collectionsLabel
    graphql(removeLabel, {
        props: ({ ownProps, mutate }) => ({
            deleteLabel: id =>
                mutate({ variables: { id } })
                    .then(() => {
                        ownProps.delete(id);
                    })
                    .catch(() => {
                        const message = {
                            type: 'error',
                            message: "We couldn't create your label"
                        };
                        ownProps.update({
                            key: 'message',
                            value: message
                        });
                    })
        })
    }),
    // Add label to card
    graphql(addSeedLabel, {
        props: ({ ownProps, mutate }) => ({
            addLabel: (seedId, labelId) =>
                mutate({ variables: { seedId, labelId } })
                    .then(() => ownProps.attach(labelId))
                    .catch(() => {
                        const message = {
                            type: 'error',
                            message: "We couldn't remove your label"
                        };
                        ownProps.update({
                            key: 'message',
                            value: message
                        });
                    })
        })
    }),
    // Remove label from card
    graphql(removeSeedLabel, {
        props: ({ ownProps, mutate }) => ({
            removeLabel: (seedId, labelId) =>
                mutate({ variables: { seedId, labelId } })
                    .then(() => ownProps.detach(labelId))
                    .catch(() => {
                        const message = {
                            type: 'error',
                            message: "We couldn't remove your label"
                        };
                        ownProps.update({
                            key: 'message',
                            value: message
                        });
                    })
        })
    })
)(LabelsActionBox);
