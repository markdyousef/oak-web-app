import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { SquareButton, RoundButton } from './index';

storiesOf('Button', module)
    .add('Ghost Squared', () => (
        <SquareButton
            onClick={action('Fuck Yeah!')}
            text="Cancel"
        />
    ))
    .add('Ghost Rounded', () => (
        <RoundButton
            onClick={action('Clicked!')}
            text="Add Label"
            rounded
        />
    ))
    .add('Primary Rounded', () => (
        <RoundButton
            onClick={action('Clicked!')}
            text="Share Card"
            rounded
            type="primary"
        />
    ))
    .add('Primary Square', () => (
        <SquareButton
            onClick={action('Clicked!')}
            text="Challenge"
            type="primary"
        />
    ))
    .add('Alarm Square', () => (
        <SquareButton
            onClick={action('Clicked!')}
            text="Challenge"
            type="alarm"
        />
    ));
