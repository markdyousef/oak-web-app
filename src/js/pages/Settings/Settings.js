import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Navigation from './Navigation';
import SettingsProfile from '../../containers/SettingsProfileContainer';
import SettingsAccount from '../../containers/SettingsAccountContainer';

const Container = styled.div`
    width: 100%;
    padding: 20px 0;
    background-color: #fff;
    height: 100vh;
    padding-top: 60px;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 40px;
`;

const NavContainer = styled.div`
    width: 100%;
    max-width: 220px;
`;

const MainContainer = styled.div`
    width: 100%;
    max-width: 500px;
    padding-left: 100px;
    & h1 {
        font-size: 24px;
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 16px;
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
                    <Title>Settings</Title>
                        <Navigation activeSection={activeSection} onSelect={section => this.setState({ activeSection: section })} />
                    </NavContainer>
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
