import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Comments from './Comments';

storiesOf('Comments', module)
    .add('Comments empty', () => (
        <Comments

        />
    ))
