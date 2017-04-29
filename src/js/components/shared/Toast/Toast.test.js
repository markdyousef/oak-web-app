// @flow
import React from 'react';
import { shallow } from 'enzyme';
import Toast from './Toast';

it('renders correctly', () => {
    const props = {
        message: {}
    };

    const shallowComponent = shallow(
        <Toast {...props} />
    );
    expect(shallowComponent).toMatchSnapshot();
});
