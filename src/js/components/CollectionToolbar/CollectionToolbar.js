// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Dropdown from '../shared/Dropdown';
import colors from '../../styles/colors';
import { Chip as Label } from '../shared/Label';

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

const LabelContainer = styled.div`
    max-height: 150px;
    overflow: auto;
`;


type DefaultProps = {};
type Props = {
    active: string,
    onSort: () => void,
    labels: Array<Object>,
    filters: Array<string>,
    onFilter: (key:string) => void
};
type State = {
    isOpen: bool
};

export default class Toolbar extends Component {
    static defaultProps: DefaultProps;
    props: Props;
    state: State;
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
    }
    renderSortItems = () => {
        const { active, onSort } = this.props;
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
                    onSort(item.name);
                    this.setState({ isOpen: false });
                }}
            >
                {item.name}
            </MenuItem>
        ));
    }
    renderFilterItems = () => {
        const { labels, filters, onFilter } = this.props;
        return (
            <LabelContainer>
                {labels.map((label) => {
                    const isActive = filters.indexOf(label.id) > -1;
                    return (
                        <Label
                            key={label.id}
                            onClick={() => onFilter(label.id)}
                            style={{ backgroundColor: label.color }}
                            name={label.name}
                            isActive={isActive}
                        />
                    );
                })}
            </LabelContainer>
        );
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
                        <Dropdown
                            arrowPos="none"
                            onClose={() => this.setState({ isOpen: false })}
                        >
                            {this.renderSortItems()}
                            {this.renderFilterItems()}
                        </Dropdown>
                    </DropdownContainer>
                }
            </Container>
        );
    }
}
