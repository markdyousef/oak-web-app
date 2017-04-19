// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import CreateLabels from './CreateLabels';
import AddLabels from './AddLabels';
import Dropdown from '../shared/Dropdown';

const COLORS = [
    '#C1BD9D',
    '#FEC288',
    '#FFA489',
    '#E87385',
    '#EAABC8',
    '#B5D3C9',
    '#708680',
    '#67B1B4',
    '#6A76A7',
    '#6E4B6E'
];

const Container = styled.div`
    position: absolute;
    z-index: 9999;
    margin-top: 20px;
    width: 250px;
`;

type Data = {
    loading: bool,
    refetch: Function,
    grove: {
        labels: Array<Object>
    }
}

type Props = {
    collectionId: string,
    onClose: Function,
    changeCardLabel: Function,
    createLabel: Function,
    data: Data,
    labels: Array<string>
};

type State = {
    showCreate: bool,
    cardLabels: Array<string>,
    collectionLabels: Array<Object>,
    labelName: string,
    selectedColor: string
};
type DefaultProps = {};

class LabelsActionBox extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps;
    state: State;
    constructor(props: Props) {
        super(props);
        this.state = {
            labelName: '',
            selectedColor: COLORS[0],
            showCreate: false,
            collectionLabels: [],
            cardLabels: props.labels
        };
    }
    componentWillReceiveProps(nextProps:Props) {
        const { data } = nextProps;

        if (data.loading) return;
        const { grove } = data;
        this.setState({
            collectionLabels: (grove && grove.labels) ? grove.labels : []
        });
    }
    createLabel = (name:string, color:string) => {
        const { createLabel, data, collectionId } = this.props;
        createLabel(collectionId, name, color)
            .then(() => {
                data.refetch();
                this.setState({ labelName: '' });
            })
            .catch(err => console.log(err));
    }
    // TODO: refactor to card detail wrapper
    onChange = (key:string, value: string) => {
        const stateKeys = Object.keys(this.state);
        const newState = Object.assign(this.state);
        if (stateKeys.indexOf(key) > -1) {
            newState[key] = value;
            this.setState(newState);
        }
    }
    renderLabels = () => {
        const { showCreate, collectionLabels, cardLabels, labelName, selectedColor } = this.state;
        const { changeCardLabel } = this.props;

        if (showCreate) {
            return (
                <CreateLabels
                    onCreate={this.createLabel}
                    changePage={() => this.setState({ showCreate: false })}
                    onChange={this.onChange}
                    labelName={labelName}
                    selectedColor={selectedColor}
                    labelColors={COLORS}
                />
            );
        }
        return (
            <AddLabels
                changePage={() => this.setState({ showCreate: !showCreate })}
                collectionLabels={collectionLabels}
                cardLabels={cardLabels}
                onSelect={changeCardLabel}
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
