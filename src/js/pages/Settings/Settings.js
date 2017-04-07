import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Navigation from './Navigation';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    background-color: ${colors.white};
    align-items: center;
    justify-content: center;
`;

const Divider = styled.div`
    height: 70%;
    margin: 0 80px;
    width: 1px;
    background-color: ${colors.lightGrey}
`;

class Settings extends Component {
    static propTypes = {
        router: PropTypes.shape({
            replace: PropTypes.func
        }).isRequired
    }
    constructor() {
        super();
        this.state = {
            activeSection: 0
        };
    }
    render() {
        const { activeSection } = this.state;
        return (
            <Container>
                <Navigation activeSection={activeSection} onSelect={() => {}} />
                <Divider />
            </Container>
        );
    }
}

export default Settings;
