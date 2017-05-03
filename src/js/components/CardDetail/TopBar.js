// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import LabelsActionBox from '../../containers/LabelsActionBoxContainer';
import { RoundButton } from '../shared/Button';

const Container = styled.nav`
    display: flex;
    background: ${colors.white};
    border-bottom: 1px solid ${colors.lightGrey};
    height: 60px;
    align-items: center;
    justify-content: flex-end;
`;

const Right = styled.div`
    ${''/* position: fixed; */}
    display: flex;
    align-items: center;
    padding-right: 30px;
    & button {
        margin: 0 2px;
    }
`;

const EditNav = styled.div`
    display: flex;
`;

export const Close = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    font-size: 30px;
    font-weight: normal;
`;

type Props = {
    onClose: Function,
    onSave: Function,
    onEdit: Function,
    showEdit: bool,
    showComments: Function,
    collectionId: string,
    changeCardLabel: Function,
    labels: Array<string>,
    isLoading: bool,
    existingCard: bool
};
type State = {
    showLabels: bool
};
type DefaultProps = {};

class TopBar extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps
    state: State;
    props: Props;
    constructor() {
        super();
        this.state = {
            showLabels: false
        };
    }
    renderButtons = () => {
        const { onSave, showEdit, onEdit, collectionId, labels, changeCardLabel, isLoading, existingCard } = this.props;
        const { showLabels } = this.state;

        if (showEdit) {
            return (
                <EditNav>
                    <div>
                        <RoundButton
                            text="Add label"
                            onClick={() => this.setState({ showLabels: !showLabels })}
                        />
                        {showLabels &&
                            <LabelsActionBox
                                onClose={() => this.setState({ showLabels: false })}
                                collectionId={collectionId}
                                labels={labels}
                                changeCardLabel={changeCardLabel}
                            />
                        }
                    </div>
                    <RoundButton
                        text="Save card"
                        onClick={onSave}
                        type={(existingCard) ? 'primary' : 'secondary'}
                        isLoading={isLoading}
                    />
                </EditNav>
            );
        }
        return <RoundButton text="Edit card" type="secondaryAction" onClick={onEdit} />;
    }
    render() {
        const { onClose, showComments } = this.props;
        return (
            <Container>
                <Right>
                    <RoundButton
                        onClick={showComments}
                        text="Comments"
                        type="transparent"
                    />
                    {this.renderButtons()}
                    <Close onClick={onClose}>
                        &times;
                    </Close>
                </Right>

            </Container>
        );
    }
}


export default TopBar;
