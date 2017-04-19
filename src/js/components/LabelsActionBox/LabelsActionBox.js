import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import CreateLabels from './CreateLabels';
import AddLabels from './AddLabels';
import Dropdown from '../shared/Dropdown';

const Container = styled.div`
    position: absolute;
    z-index: 9999;
    margin-top: 20px;
    width: 250px;
`;


class LabelsActionBox extends Component {
    static propTypes = {
        close: PropTypes.func.isRequired,
        createLabel: PropTypes.func.isRequired,
        addLabel: PropTypes.func.isRequired,
        removeLabel: PropTypes.func.isRequired,
        collectionId: PropTypes.string.isRequired,
        cardId: PropTypes.string.isRequired,
        collection: PropTypes.shape({
            loading: PropTypes.bool,
            grove: PropTypes.shape({
                labels: PropTypes.arrayOf(PropTypes.object)
            })
        }).isRequired,
        card: PropTypes.shape({
            loading: PropTypes.bool,
            seed: PropTypes.shape({
                labels: PropTypes.arrayOf(PropTypes.object)
            })
        }).isRequired
    };
    static defaultProps = {};
    constructor() {
        super();
        this.state = {
            showCreate: false,
            collectionLabels: [],
            cardLabels: []
        };
    }
    componentWillReceiveProps(nextProps) {
        const { collection, card } = nextProps;

        if (collection.loading || card.loading) return;
        if (!collection.grove) return;
        // TODO: issue with grove
        this.setState({
            collectionLabels: collection.grove.labels,
            cardLabels: card.seed.labels.map(label => label.id)
        });
    }
    createLabel = (name, color) => {
        const { createLabel, collection, collectionId } = this.props;
        createLabel(collectionId, name, color)
            .then(() => collection.refetch())
            .catch(err => console.log(err));
    }
    changeLabel = (id) => {
        const { addLabel, cardId, removeLabel } = this.props;
        const { cardLabels } = this.state;

        const labelExist = cardLabels.findIndex(labelId => labelId === id) > -1;
        if (labelExist) {
            removeLabel(cardId, id)
                .then((res) => {
                    if (res.data.removeSeedLabel) {
                        const labels = cardLabels.filter(labelId => labelId !== id);
                        this.setState({ cardLabels: labels });
                    }
                })
                .catch(err => console.log(err));
        } else {
            addLabel(cardId, id)
                .then((res) => {
                    if (res.data.addSeedLabel) {
                        cardLabels.push(id);
                        this.setState({ cardLabels });
                    }
                })
                .catch(err => console.log(err));
        }
    }
    renderLabels = () => {
        const { close, collection, card } = this.props;
        const { showCreate, collectionLabels, cardLabels } = this.state;

        if (collection.loading || card.loading) return <div>Loading</div>;

        if (showCreate) {
            return (
                <CreateLabels
                    onCreate={this.createLabel}
                    onChange={() => this.setState({ showCreate: false })}
                />
            );
        }
        return (
            <AddLabels
                onChange={() => this.setState({ showCreate: !showCreate })}
                collectionLabels={collectionLabels}
                cardLabels={cardLabels}
                onSelect={this.changeLabel}
            />
        );
    }
    render() {
        return (
            <Container>
                <Dropdown arrowPos="left">
                    {this.renderLabels()}
                </Dropdown>
            </Container>
        );
    }
}

export default LabelsActionBox;
