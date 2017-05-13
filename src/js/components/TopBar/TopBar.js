// @flow
import React from 'react';
import {
    MainNavContainer,
    ActionBar,
    SettingsContainer
} from './index';
import { Container } from './styles';

export default () => {
    return (
        <Container>
            <MainNavContainer />
            {/* <ActionBar /> */}
            <SettingsContainer />
        </Container>
    );
}
