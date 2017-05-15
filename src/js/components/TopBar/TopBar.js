// @flow
import React from 'react';
import MainNavContainer from './MainNavContainer';
import ActionBarContainer from './ActionBarContainer';
import SettingsContainer from './SettingsContainer';

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
