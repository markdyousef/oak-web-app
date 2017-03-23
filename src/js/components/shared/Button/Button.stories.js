import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button';

storiesOf('Button', module)
    .add('Ghost Squared', () => (
        <Button
            onClick={action('Fuck Yeah!')}
            text="Cancel"
        />
    ))
    .add('Ghost Rounded', () => (
        <Button
            onClick={action('Clicked!')}
            text="Add Label"
            rounded
        />
    ));
