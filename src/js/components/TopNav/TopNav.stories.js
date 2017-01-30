import React from 'react';
import { storiesOf } from '@kadira/storybook';
import TopNav from './TopNav';

storiesOf('TopNav', module)
    .add('empty', () => (
        <TopNav />
    ));
