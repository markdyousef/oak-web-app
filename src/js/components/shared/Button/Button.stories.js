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
    ))
    .add('Primary Rounded', () => (
        <Button
            onClick={action('Clicked!')}
            text="Share Card"
            rounded
            type="primary"
        />
    ))
    .add('Primary Square', () => (
        <Button
            onClick={action('Clicked!')}
            text="Challenge"
            type="primary"
        />
    ))
    .add('Alarm Square', () => (
        <Button
            onClick={action('Clicked!')}
            text="Challenge"
            type="alarm"
        />
    ));
