// @flow
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import CreateLabels from './CreateLabels';
import AddLabels from './AddLabels';
import colors from '../../styles/colors';
import Dropdown from '../shared/Dropdown';

const Container = styled.div`
    position: absolute;
    z-index: 9999;
    margin-top: 20px;
`;

const ToolBox = styled.div`
    position: relative;
    width: 250px;
    background-color: #fff;
    border: 1px solid ${colors.lightGrey};
    border-radius: 3px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 1px 3px 7px rgba(32, 33, 35, 0.05);
`;


class LabelsActionBox extends Component {
    static propTypes = {
        close: PropTypes.func.isRequired
    };
    static defaultProps = {};
    constructor() {
        super();
        this.state = {
            showCreate: true
        };
    }
    renderLabels = () => {
        const { close } = this.props;
        const { showCreate } = this.state;

        if (showCreate) {
            return (
                <CreateLabels
                    onCreate={close}
                    onChange={() => this.setState({ showCreate: false })}
                />
            );
        }
        return (
            <AddLabels />
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
