import React from 'react';
import { shallow } from 'enzyme';
import ProfilePic from './ProfilePic';

it('renders correctly', () => {
    const props = {
        onChange: () => {}
    }
    const shallowComponent = shallow(<ProfilePic {...props} />);
    expect(shallowComponent).toMatchSnapshot();
});
