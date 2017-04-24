import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Navigation from './Navigation';
import SettingsProfile from '../../containers/SettingsProfileContainer';
import SettingsAccount from '../../containers/SettingsAccountContainer';

const Container = styled.div`
    width: 100%;
    padding: 80px 0 40px;
    background-color: #fff;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Divider = styled.div`
    max-height: 600px;
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
                <Content>
                    <NavContainer>
                        <Navigation activeSection={activeSection} onSelect={section => this.setState({ activeSection: section })} />
                    </NavContainer>
                    <Divider />
                    <MainContainer>
                        {(activeSection === 0) &&
                            <SettingsProfile />
                        }
                        {(activeSection === 1) &&
                            <SettingsAccount />
                        }
                    </MainContainer>
                </Content>
            </Container>
        );
    }
}

export default Settings;
