// @flow
import React from 'react';
import { shallow } from 'enzyme';
import TopBar from './TopBar';

it('renders correctly', () => {
    const props = {
        changeCardLabel: () => {},
        collectionId: '1',
        labels: [],
        onClose: () => {},
        onEdit: () => {},
        onSave: () => {},
        showComments: () => {},
        showEdit: false,
        isLoading: false
    };
    const shallowComponent = shallow(
        <TopBar {...props} />
    );
    expect(shallowComponent).toMatchSnapshot();
});
