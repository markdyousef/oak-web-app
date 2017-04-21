// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import LabelsActionBox from '../../containers/LabelsActionBoxContainer';
import { SquareButton, RoundButton } from '../shared/Button';

const Container = styled.nav`
    display: flex;
    background: ${colors.white};
    border-bottom: 1px solid ${colors.lightGrey};
    height: 60px;
    align-items: center;
    justify-content: flex-end;
`;

const Right = styled.div`
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

type Props = {
    onClose: Function,
    onSave: Function,
    onEdit: Function,
    showEdit: bool,
    showComments: Function,
    collectionId: string,
    changeCardLabel: Function,
    labels: Array<string>
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
        const { onSave, showEdit, onEdit, collectionId, labels, changeCardLabel } = this.props;
        const { showLabels } = this.state;

        if (showEdit) {
            return (
                <EditNav>
                    <div>
                        <SquareButton
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
                    <SquareButton
                        text="Save card"
                        onClick={onSave}
                        type="primary"
                    />
                </EditNav>
            );
        }
        return <SquareButton text="Edit card" type="secondaryAction" onClick={onEdit} />;
    }
    render() {
        const { onClose, showComments } = this.props;
        return (
            <Container>
                <Right>
                    {this.renderButtons()}
                    <RoundButton
                        onClick={showComments}
                        text="Comments"
                    />
                    <RoundButton
                        onClick={onClose}
                        text="X"
                    />
                </Right>

            </Container>
        );
    }
}


export default TopBar;
