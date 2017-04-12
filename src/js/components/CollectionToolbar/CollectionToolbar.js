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

export default class Toolbar extends Component {
    state = {
        isOpen: Boolean
    }
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
    }
    renderMenuItems = () => {
        const sortItems = [
            { name: 'Date' },
            { name: 'Likes' },
            { name: 'Comments' }
        ];

        return sortItems.map(item => (
            <div key={item.name}>
                {item.name}
            </div>
        ));
    }
    render() {
        const { isOpen } = this.state;
        const chosen = 'Date';
        return (
            <Container>
                <ActionMenu onClick={() => this.setState({ isOpen: !isOpen })}>
                    <span>Sort by</span>
                    {chosen}
                </ActionMenu>
                {isOpen &&
                    <DropdownContainer>
                        <Dropdown>
                            {this.renderMenuItems()}
                        </Dropdown>
                    </DropdownContainer>
                }
            </Container>
        );
    }
}
