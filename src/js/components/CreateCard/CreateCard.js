// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles';
import LabelsActionBoxContainer from '../../containers/LabelsActionBoxContainer';
import Dropdown from '../shared/Dropdown';

const Container = styled.div`
    width: 250px;
    ${''/* height: 100px; */}
    & h3 {
        font-size: 18px;
    }
`;

const Select = styled.select`
    margin: 16px 0 8px;
    width: 100%;
    width: 100%;
    border: 1px solid #e5e5e5;
    background: #fff;
    appearance: none;
    padding: 12px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 3px;
    outline: none;
    background-image: url(../../../img/dropdown-fat.svg);
    background-size: 16px;
    background-position: 50% 90%;
    cursor: pointer;
    min-height: 44px;
    line-height: 20px;
`;

const LabelText = styled.div`
    font-size: 14px;
    color: rgba(19, 21, 23, 0.8);
    line-height: 1.35;
    margin-bottom: 16px;
`;

const Labels = styled.div`
    position: relative;
    width: 100%;
    border: 1px solid #e5e5e5;
    background: #fff;
    appearance: none;
    padding: 12px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 3px;
    text-align: left;
    margin-bottom: 16px;
    cursor: pointer;
    min-height: 44px;
    line-height: 20px;
`;


const Footer = styled.div`
    border-top: 1px solid ${colors.lightGrey};
    width: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    & button {
        right: 0;
        margin-top: 16px;
        color: ${colors.green};
        border: none;
        padding: 0;
        background-color: ${colors.white};
        font-size: 14px;
        cursor: pointer;
        font-weight: bold;
    }
`;

const LabelsContainer = styled.div`
    position: absolute;
    right: 0;
    z-index: 9999;
    width: 250px;
    margin-top: 11px;
    left: -1px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
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
        const { collections, collectionId, showLabels, onShowLabels } = this.props;
        return (
            <Container>
                <h3>Share post in:</h3>
                <Select
                    value={collectionId || ''}
                    onChange={event => this.changeCollection(event.target.value)}
                >
                    <option value="" selected>Select collection</option>
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
                    <Labels onClick={() => onShowLabels()}>
                        <div>Add labels</div>
                        {showLabels &&
                            <LabelsContainer>
                                <Dropdown onClose={() => onShowLabels(false)} arrowPos="none">
                                    <LabelsActionBoxContainer />
                                </Dropdown>
                            </LabelsContainer>
                        }
                    </Labels>
                }
                <LabelText>
                You can add labels to your post once you’ve selected a collection.
                </LabelText>
                <Footer>
                    {collectionId &&
                    <button onClick={this.addCard}>
                        Share
                    </button>}
                </Footer>
            </Container>
        );
    }
}
