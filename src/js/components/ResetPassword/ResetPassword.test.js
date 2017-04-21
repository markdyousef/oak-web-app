// @flow
import React from 'react';
import { shallow } from 'enzyme';
import ResetPassword from './ResetPassword';

it('renders correctly', () => {
    const props = {};

    const shallowComponent = shallow(
        <ResetPassword {...props} />
    );
    expect(shallowComponent).toMatchSnapshot();
});
