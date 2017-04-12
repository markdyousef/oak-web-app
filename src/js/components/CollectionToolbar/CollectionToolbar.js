// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Dropdown from '../shared/Dropdown';
import colors from '../../styles/colors';

const Container = styled.div`
    width: 100%;
    height: 60px;
    background-color: ${colors.white};
    border-bottom: 1px solid ${colors.lightGrey};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 60px;
    position: relative;
`;

const ActionMenu = styled.div`
    font-size: 14px;
    color: ${colors.black};
    font-weight: bold;
    cursor: pointer;
    & span {
        color: ${colors.grey};
        margin-right: 5px;
    }
`;

const DropdownContainer = styled.div`
    position: absolute;
    top: 60px;
    z-index: 99;
    width: 200px;
`;

const MenuItem = styled.div`
    margin-bottom: 5px;
    cursor: pointer;
    font-weight: ${props => props.active ? 'bolder' : 'normal'}
`;

export default class Toolbar extends Component {
    state: {
        isOpen: boolean
    }
    props: {
        active: ?string,
        // onSelect: void
    }
    static defaultProps = {
        active: 'date',
        onSelect: () => {}
    }
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
    }
    renderMenuItems = () => {
        const { active, onSelect } = this.props;
        const sortItems = [
            { name: 'date' },
            { name: 'likes' },
            { name: 'comments' }
        ];

        return sortItems.map(item => (
            <MenuItem
                key={item.name}
                active={item.name === active}
                onClick={() => {
                    onSelect(item.name);
                    this.setState({ isOpen: false });
                }}
            >
                {item.name}
            </MenuItem>
        ));
    }
    render() {
        const { isOpen } = this.state;
        const { active } = this.props;
        return (
            <Container>
                <ActionMenu onClick={() => this.setState({ isOpen: !isOpen })}>
                    <span>Sort by</span>
                    {active}
                </ActionMenu>
                {isOpen &&
                    <DropdownContainer>
                        <Dropdown arrowPos="none">
                            {this.renderMenuItems()}
                        </Dropdown>
                    </DropdownContainer>
                }
            </Container>
        );
    }
}
