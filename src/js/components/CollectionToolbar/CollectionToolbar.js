// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Dropdown from '../shared/Dropdown';
import colors from '../../styles/colors';
import { Box as Label, Chip } from '../shared/Label';

const Container = styled.div`
    max-width: 1050px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 20px 20px 0;
    position: relative;
    min-height: 44px;
    @media (min-width: 1600px) {
        max-width: 1386px;
    }
`;

const ActionMenu = styled.div`
    font-size: 14px;
    margin-left: 10px;
    color: ${colors.grey};
    font-weight: normal;
    cursor: pointer;
    align-items: center;
    & span {
        color: ${colors.grey};
        margin-right: 4px;
        cursor: pointer;
    }
    & label {
        text-transform: capitalize;
        font-weight: bold;
        cursor: pointer;
    }
`;

const LabelsMenu = styled.div`
    font-size: 14px;
    margin-left: 16px;
    color: ${colors.grey};
    font-weight: normal;
    cursor: pointer;
    & span {
        color: ${colors.grey};
        margin-right: 4px;
        cursor: pointer;
    }
    & label {
        font-weight: bold;
        cursor: pointer;
    }
`;

const DropdownContainer = styled.div`
    position: absolute;
    top: 60px;
    z-index: 99;
    width: 200px;
`;

const MenuItem = styled.div`
    margin-bottom: 16px;
    cursor: pointer;
    font-weight: ${props => props.active ? 'bolder' : 'normal'};
    position: relative;
    z-index: 1;
    &:last-child {
        margin-bottom: 0;
    }
    &:hover {
        color: #fff;
    }
    &:hover:before {
        content: '';
        background: #34b289;
        border-radius: 3px;
        padding: 4px 8px;
        color: #fff;
        position: absolute;
        margin: -8px;
        width: calc(100% + 16px);
        height: 32px;
        z-index: -1;
    }
`;

const LabelContainer = styled.div`
    max-height: 190px;
    overflow: scroll;
    overflow-x: hidden;
    margin: -20px -16px -20px -20px;
    padding-right: 8px;
`;

const Labels = styled.div`
    display: flex;
    & div {
        border-radius: 2px;
        display: inline-block;
        padding: 4px 8px;
        margin-right: 8px;
        line-height: 16px;
        height: 24px;
    }
`;

const LabelName = styled.div`
    font-size: 14px;
    color: #131517;
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
    showSort: bool,
    showFilter: bool
};

export default class Toolbar extends Component {
    static defaultProps: DefaultProps;
    props: Props;
    state: State;
    constructor() {
        super();
        this.state = {
            showSort: false,
            showFilter: false
        };
    }
    renderSortItems = () => {
        const { active, onSort } = this.props;
        const sortItems = [
            { name: 'Date' },
            { name: 'Comments' },
            { name: 'Likes' }
        ];

        return sortItems.map(item => (
            <MenuItem
                key={item.name}
                active={item.name === active}
                onClick={() => {
                    onSort(item.name);
                    this.setState({ showSort: false });
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
    renderLabels = () => {
        const { labels, filters, onFilter } = this.props;
        if (labels) {
            return labels.map((label) => {
                const exists = filters.indexOf(label.id);
                if (exists > -1) {
                    return (
                        <Chip
                            key={label.id}
                            onClick={() => onFilter(label.id)}
                            style={{ backgroundColor: label.color }}
                            name={label.name}
                        />
                    );
                }
                return null;
            }).filter(Boolean);
        }
        return null;
    }
    render() {
        const { showSort, showFilter } = this.state;
        const { filters, active } = this.props;
        return (
            <Container>
                <div>
                    <ActionMenu onClick={() => this.setState({ showSort: !showSort })}>
                        <span>
                            Sort by:
                        </span>
                        <label>{active}</label>
                    </ActionMenu>
                    {showSort &&
                        <DropdownContainer>
                            <Dropdown
                                arrowPos="moreleft"
                                onClose={() => this.setState({ showSort: false })}
                            >
                                {this.renderSortItems()}
                            </Dropdown>
                            </DropdownContainer>
                        }
                </div>
                <div>
                    <LabelsMenu onClick={() => this.setState({ showFilter: !showFilter })}>
                        <span>
                            Filter:
                        </span>
                        <label>{(filters && filters.length < 1) && 'Labels'}</label>
                    </LabelsMenu>
                    {showFilter &&
                        <DropdownContainer>
                            <Dropdown
                                arrowPos="moreleft"
                                onClose={() => this.setState({ showFilter: false })}
                            >
                                {this.renderFilterItems()}
                            </Dropdown>
                            </DropdownContainer>
                        }
                </div>
                <Labels>
                    {this.renderLabels()}
                </Labels>
            </Container>
        );
    }
}
