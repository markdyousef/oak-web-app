import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import MessageStats from './MessageStats';
import MessageItem from './MessageItem';

storiesOf('MessageStats', module)
    .add('empty', () => (
        <MessageStats />
    ));
storiesOf('MessageItem', module)
    .add('MessageItem with text and time', () => (
        <MessageItem message={{ text: 'Hello', ts: 'now' }} onClick={action('clicked')} />
    ));
