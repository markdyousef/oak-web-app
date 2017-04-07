import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Navigation from './Navigation';
import SettingsProfile from '../../containers/SettingsProfileContainer';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    background-color: ${colors.white};
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 80px;
`;

const Divider = styled.div`
    height: 70%;
    margin: 0 80px;
    width: 1px;
    background-color: ${colors.lightGrey};
    @media (max-width: 1000px) {
        width: 0;
    }
`;

const NavContainer = styled.div`
    max-height: 580px;
    width: 100%;
    max-width: 220px;
`;

const MainContainer = styled.div`
    max-height: 580px;
    width: 100%;
    max-width: 400px;
    & h1 {
        font-size: 24px;
    }
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
                <NavContainer>
                    <Navigation activeSection={activeSection} onSelect={section => this.setState({ activeSection: section })} />
                </NavContainer>
                <Divider />
                <MainContainer>
                    {(activeSection === 0) &&
                        <SettingsProfile />
                    }
                </MainContainer>
            </Container>
        );
    }
}

export default Settings;
