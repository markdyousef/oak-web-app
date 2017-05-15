// @flow
import React, { Component } from 'react';
import EditLabel from './EditLabel';
import AddLabels from './AddLabels';
import Dropdown from '../shared/Dropdown';
import { labelColors } from '../../styles';

type Data = {
    loading: bool,
    refetch: Function,
    grove?: {
        labels: Array<Object>
    }
}

type Props = {
    collectionLabels?: Data,
    cardLabels?: Object,
    card?: Object,
    collectionId?: string,
    cardId: ?string,
    labels?: Object,
    updateCard: (field:Object) => void,
    update: (field:Object) => void,
    delete: (labelId: string) => void,
    createLabel: Function,
    updateLabels: (id: string, name: string, color: string) => Promise<>,
    removeLabel: (id: string) => Promise<>,
    createCard: (id: string, name: string) => Promise<>,
    editLabel?: (label: Object) => void
};

type State = {};
type DefaultProps = {};

class LabelsActionBox extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps;
    state: State;
    componentWillReceiveProps(nextProps:Props) {
        const { collectionLabels, cardLabels, labels } = nextProps;
        const didInitialize = labels && labels.get('didInitialize');

        // TODO: find a better way to load into redux
        if (!collectionLabels || collectionLabels.loading) return;
        if (!didInitialize) {
            this.updateLabels('didInitialize', true);
            // add collectionLabelsLabels to redux
            if (collectionLabels.grove) {
                const { grove } = collectionLabels;
                this.updateLabels(
                    'collectionLabels',
                    (grove.labels) || []
                );
            }
            // add cardLabelsLabels to redux
            if (!cardLabels || cardLabels.loading) return;
            if (cardLabels.seed) {
                const { seed } = cardLabels;
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
    changeCardLabel = (labelId: string, hasSaved?: bool, cardId?: string) => {
        const {
            createCard,
            removeLabel,
            addLabel,
            collectionId,
            labels,
            card
        } = this.props;
        if (!card) return;
        console.log(card);
        const id = (cardId) ? cardId : card.get('cardId');
        const name = card && card.get('name');
        if (!id && collectionId && !hasSaved) {
            createCard(collectionId, name || '')
                .then((id) => {
                    this.changeCardLabel(labelId, true, id);
                })
            return;
        }
        if (!labels || !id) return;
        const cardLabels = labels.get('cardLabels');
        const labelExist = cardLabels.findIndex(id => id === labelId) > -1;
        if (labelExist) {
            removeLabel(id, labelId);
        } else {
            addLabel(id, labelId);
        }
    }
    showEdit = (label: Object) => {
        const { editLabel } = this.props;
        const { id, name, color } = label;
        if (editLabel) editLabel({ id, name, color });
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
        if (!labels) return null;
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
        return this.renderLabels();
    }
}

export default LabelsActionBox;
