// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import CreateLabels from './CreateLabels';
import AddLabels from './AddLabels';
import Dropdown from '../shared/Dropdown';
import { labelColors } from '../../styles';

const Container = styled.div`
    position: absolute;
    z-index: 9999;
    margin-top: 20px;
    width: 250px;
`;

type Data = {
    loading: bool,
    refetch: Function,
    grove?: {
        labels: Array<Object>
    }
}

type Props = {
    collectionId: string,
    changeCardLabel: Function,
    createLabel: Function,
    collection?: Data,
    card?: Object,
    labels?: Object,
    updateLabels: (field:Object) => void
};

type State = {};
type DefaultProps = {};

class LabelsActionBox extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps;
    state: State;
    componentWillReceiveProps(nextProps:Props) {
        const { collection, card, labels } = nextProps;
        const didInitialize = labels && labels.get('didInitialize');

        // TODO: find a better way to load into redux
        if (!collection || collection.loading) return;
        if (!didInitialize) {
            this.updateLabel('didInitialize', true);
            // add collectionLabels to redux
            if (collection.grove) {
                const { grove } = collection;
                this.updateLabel(
                    'collectionLabels',
                    (grove.labels) || []
                );
            }
            // add cardLabels to redux
            if (!card || card.loading) return;
            if (card.seed) {
                const { seed } = card;
                this.updateLabel(
                    'cardLabels',
                    (seed.labels) || []
                )
            }
        }
    }
    createLabel = (labelName:string, labelColor:string) => {
        const { createLabel, collectionId, create } = this.props;
        createLabel(collectionId, labelName, labelColor)
            .then((res) => {
                const { name, color, id } = res.data.createLabel;
                create({ name, color, id });
            })
            .catch(() => {
                const message = {
                    type: 'error',
                    message: "We couldn't create your label",
                    onSave: () => this.createLabel(labelName, labelColor)
                };
                this.updateLabel('message', message);
            });
    }
    updateLabel = (key:string, value: any) => {
        const { updateLabels } = this.props;
        updateLabels({ key, value });
    }
    onClose = () => this.updateLabel('showLabels', false);
    changePage = (page: string) => this.updateLabel('page', page);
    changeCardLabel = (labelId: string) => {
        const {
            createCard,
            removeLabel,
            attach,
            detach,
            addLabel,
            updateCard,
            cardId,
            collectionId,
            labels
        } = this.props;
        if (!cardId) {
            createCard(collectionId, '')
                .then((res) => {
                    const id = res.data.createSeed.id;
                    updateCard({
                        key: 'cardId',
                        value: id
                    });
                    this.changeCardLabel(labelId);
                })
                .catch(() => {
                    const message = {
                        type: 'error',
                        message: "We couldn't create your label",
                        onSave: () => this.changeCardLabel(labelId)
                    };
                    this.updateLabel('message', message);
                });
            return;
        }
        const cardLabels = labels.get('cardLabels');
        const labelExist = cardLabels.findIndex(id => id === labelId) > -1;
        if (labelExist) {
            removeLabel(cardId, labelId)
                .then((res) => {
                    if (res.data.removeSeedLabel) {
                        detach(labelId);
                    }
                    updateCard({
                        key: 'shouldUpdate',
                        value: true
                    });
                })
                .catch(() => {
                    const message = {
                        type: 'error',
                        message: "We couldn't remove your label",
                        onSave: () => this.changeCardLabel(labelId)
                    };
                    this.updateLabel('message', message);
                });
        } else {
            addLabel(cardId, labelId)
                .then((res) => {
                    if (res.data.addSeedLabel) {
                        attach(labelId);
                    }
                    updateCard({
                        key: 'shouldUpdate',
                        value: true
                    });
                })
                .catch(() => {
                    const message = {
                        type: 'error',
                        message: "We couldn't add your label",
                        onSave: () => this.changeCardLabel(labelId)
                    };
                    this.updateLabel('message', message);
                });
        }
    }
    renderLabels = () => {
        const { labels } = this.props;
        const labelsObj = (labels) ? labels.toJS() : {};

        switch (labelsObj.page) {
        case 'CREATE':
            return (
                <CreateLabels
                    onCreate={this.createLabel}
                    changePage={() => this.changePage('ADD')}
                    onChange={this.updateLabel}
                    labelName={labelsObj.labelName}
                    selectedColor={labelsObj.selectedColor}
                    labelColors={labelColors}
                />
            );
        case 'ADD':
            return (
                <AddLabels
                    changePage={() => this.changePage('CREATE')}
                    collectionLabels={labelsObj.collectionLabels}
                    cardLabels={labelsObj.cardLabels}
                    onSelect={this.changeCardLabel}
                />
            );
        case 'EDIT':
            return null;
        default:
            return null;
        }
    }
    render() {
        return (
            <Container>
                <Dropdown arrowPos="left" onClose={this.onClose}>
                    {this.renderLabels()}
                </Dropdown>
            </Container>
        );
    }
}

export default LabelsActionBox;
