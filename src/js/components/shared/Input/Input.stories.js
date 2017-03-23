import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Input from './Input';

storiesOf('Input', module)
    .add('Default Input', () => (
        <Input
            onClick={action('Fuck Yeah!')}
            text="Cancel"
            placeholder="Name"
        />
    ))
    .add('Default Input notValid', () => (
        <Input
            onClick={action('Fuck Yeah!')}
            text="Cancel"
            placeholder="Name"
            notValid
        />
    ));
