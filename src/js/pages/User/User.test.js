import React from 'react';
import { shallow } from 'enzyme';
import User from './User';

it('renders correctly', () => {
    const shallowComponent = shallow(<User />);
    expect(shallowComponent).toMatchSnapshot();
});
