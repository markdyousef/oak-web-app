// @flow
import React from 'react';
import { withRouter } from 'react-router';
import {
    MainNavContainer,
    ActionBarContainer,
    SettingsContainer
} from './index';
import { Container } from './styles';

export default () => {
    return (
        <Container>
            <MainNavContainer />
            <ActionBarContainer />
            <SettingsContainer />
        </Container>
    );
};
