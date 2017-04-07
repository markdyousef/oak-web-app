import React from 'react';
import { shallow } from 'enzyme';
import ProfilePic from './ProfilePic';

it('renders correctly', () => {
    const shallowComponent = shallow(<ProfilePic />);
    expect(shallowComponent).toMatchSnapshot();
});
