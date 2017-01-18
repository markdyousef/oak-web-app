import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button';

storiesOf('Button', module)
    .add('with text', () => (
        <Button onClick={action('Fuck Yeah!')} text="Click me!" />
    ))
