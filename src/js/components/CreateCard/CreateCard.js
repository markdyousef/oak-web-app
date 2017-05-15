// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles';
import LabelsActionBoxContainer from '../../containers/LabelsActionBoxContainer';

const Container = styled.div`
    width: 200px;
    height: 100px;
    & h3 {
        font-size: 18px;
    }
`;

const Select = styled.select`
    margin: 15px 0;
    width: 100%;
`;

const Labels = styled.div`
    & button {
        width: 100%;
    }
`;


const Footer = styled.div`
    border-top: 1px solid ${colors.lightGrey};
    width: 100%;
    height: 50px;
    position: relative;
    & button {
        position: absolute;
        right: 0;
        margin-top: 20px;
        color: ${colors.green};
        border: none;
        padding: 0;
        background-color: ${colors.white};
        font-size: 14px;
        cursor: pointer;
    }
`;


type DefaultProps = {
    onShowLabels: () => void
};

type Props = {
    collectionId?: string,
    collections?: Array<Object>,
    updateCollection?: (id: string) => void,
    addCard?: Function,
    showLabels?: bool,
    onShowLabels: () => void
};

type State = {
    collection: ?string
};

export default class CreateCard extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps = {
        onShowLabels: () => {}
    };
    props: Props;
    state: State;
    addCard = () => {
        const { addCard, collectionId } = this.props;
        if (addCard) {
            addCard(collectionId);
        }
    }
    changeCollection = (id: string) => {
        const { updateCollection } = this.props;
        if (updateCollection) updateCollection(id);
    }
    render() {
        const { collections, addCard, collectionId, showLabels, onShowLabels } = this.props;
        return (
            <Container>
                <h3>Create Card in:</h3>
                <Select
                    value={collectionId || ''}
                    onChange={event => this.changeCollection(event.target.value)}
                >
                    <option value="" selected>Select Collection</option>
                    {collections && collections.map(item =>
                        <option
                            key={item.id}
                            value={item.id}
                        >
                            {item.name}
                        </option>
                    )}
                </Select>
                {collectionId &&
                    <Labels>
                        <button onClick={() => onShowLabels()}>LABELS</button>
                        {showLabels &&
                            <LabelsActionBoxContainer />
                        }
                    </Labels>
                }
                <Footer>
                    {collectionId &&
                    <button onClick={this.addCard}>
                        Start Creating
                    </button>}
                </Footer>
            </Container>
        );
    }
}
