// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import EditLabel from './EditLabel';
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
    collection?: Data,
    card?: Object,
    collectionId: string,
    cardId: ?string,
    labels?: Object,
    updateCard: (field:Object) => void,
    update: (field:Object) => void,
    delete: (labelId: string) => void,
    createLabel: Function,
    updateLabels: (id: string, name: string, color: string) => Promise<>,
    removeLabel: (id: string) => Promise<>,
    createCard: (id: string, name: string) => Promise<>,
    editLabel: (label: Object) => void
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
            this.updateLabels('didInitialize', true);
            // add collectionLabels to redux
            if (collection.grove) {
                const { grove } = collection;
                this.updateLabels(
                    'collectionLabels',
                    (grove.labels) || []
                );
            }
            // add cardLabels to redux
            if (!card || card.loading) return;
            if (card.seed) {
                const { seed } = card;
                this.updateLabels(
                    'cardLabels',
                    (seed.labels) || []
                )
            }
        }
    }
    updateLabels = (key:string, value: any) => {
        const { update } = this.props;
        update({ key, value });
    }
    onClose = () => this.updateLabels('showLabels', false);
    changePage = (page: string) => this.updateLabels('page', page);
    changeCardLabel = (labelId: string) => {
        const {
            createCard,
            removeLabel,
            addLabel,
            cardId,
            collectionId,
            labels
        } = this.props;
        if (!cardId) {
            createCard(collectionId, '')
                .then(() => this.changeCardLabel(labelId));
            return;
        }
        const cardLabels = labels.get('cardLabels');
        const labelExist = cardLabels.findIndex(id => id === labelId) > -1;
        if (labelExist) {
            removeLabel(cardId, labelId);
        } else {
            addLabel(cardId, labelId);
        }
    }
    showEdit = (label: Object) => {
        const { editLabel } = this.props;
        const { id, name, color } = label;
        editLabel({ id, name, color });
    }
    renderLabels = () => {
        const {
            labels,
            updateLabel,
            createLabel,
            deleteLabel,
            collectionId,
            updateActiveLabel
        } = this.props;
        const labelsObj = (labels) ? labels.toJS() : {};
        const { id, name, color } = labelsObj.activeLabel;

        switch (labelsObj.page) {
        case 'ADD':
            return (
                <AddLabels
                    changePage={() => this.changePage('CREATE')}
                    collectionLabels={labelsObj.collectionLabels}
                    cardLabels={labelsObj.cardLabels}
                    onSelect={this.changeCardLabel}
                    showEdit={this.showEdit}
                />
            );
        case 'CREATE':
            return (
                <EditLabel
                    onCreate={() => createLabel(collectionId, name, color)}
                    changePage={() => this.changePage('ADD')}
                    onChange={updateActiveLabel}
                    labelName={name}
                    selectedColor={color}
                    labelColors={labelColors}
                />
            );
        case 'EDIT':
            return (
                <EditLabel
                    onDelete={() => deleteLabel(id)}
                    onUpdate={() => updateLabel(id, name, color)}
                    changePage={() => this.changePage('ADD')}
                    onChange={updateActiveLabel}
                    labelName={name}
                    selectedColor={color}
                    labelColors={labelColors}
                />
            );
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
