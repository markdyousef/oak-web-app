import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import LabelsActionBox from './LabelsActionBox';

storiesOf('LabelsActionBox', module)
    .add('LabelsActionBox', () => (
        <LabelsActionBox
            close={action('close')}
            create={action('create')}
        />
    ));
