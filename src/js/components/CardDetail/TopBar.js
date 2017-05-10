// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import LabelsActionBox from '../../containers/LabelsActionBoxContainer';
import { RoundButton } from '../shared/Button';
import logo from '../../../img/cuest-logo.png';

const Container = styled.nav`
    display: flex;
    background: ${colors.white};
    border-bottom: 1px solid ${colors.lightGrey};
    height: 60px;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    z-index: 9999999;
    top: 0;
`;

const Right = styled.div`
    ${''/* position: fixed; */}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 25px;
    width: 450px;
    & button {
        margin: 0 2px;
    }
`;

const Center = styled.div`
    position: relative;
    margin: auto;
`;

const Left = styled.div`
    margin-left: 25px;
    height: 100%;
    display: flex;
    align-items: center;
    width: 450px;
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
    onShowLabels: (show: bool) => void,
    showLabels: bool,
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
    renderButtons = () => {
        const {
            onSave,
            showEdit,
            onEdit,
            isLoading,
            existingCard,
            showLabels,
            onShowLabels
        } = this.props;

        if (showEdit) {
            return (
                <EditNav>
                    <div>
                        <RoundButton
                            text="Add label"
                            onClick={() => onShowLabels(!showLabels)}
                        />
                        {showLabels &&
                            <LabelsActionBox />
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
        const { onClose, showComments, existingCard } = this.props;
        return (
            <Container>
                <Left>
                    Writing in CollectionName
                </Left>
                <Center>
                    <img src={logo} alt="logo" />
                </Center>
                <Right>
                    {existingCard &&
                        <RoundButton
                            onClick={showComments}
                            text="Comments"
                            type="transparent"
                        />
                    }
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
