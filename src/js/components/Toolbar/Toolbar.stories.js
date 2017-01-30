import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Toolbar from './Toolbar';

storiesOf('Toolbar', module)
    .add('empty', () => (
        <Toolbar />
    ));
