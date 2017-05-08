// @flow
import React from 'react';
import { shallow } from 'enzyme';
import TopBar from './TopBar';

it('renders correctly', () => {
    const props = {
        onClose: () => {},
        onEdit: () => {},
        onSave: () => {},
        showComments: () => {},
        showEdit: false,
        isLoading: false,
        existingCard: false,
        onShowLabels: () => {},
        showLabels: false
    };
    const shallowComponent = shallow(
        <TopBar {...props} />
    );
    expect(shallowComponent).toMatchSnapshot();
});
