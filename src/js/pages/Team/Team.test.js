import React from 'react';
import { shallow } from 'enzyme';
import Team from './Team';

it('renders correctly', () => {
    const props = {
        children: null
    }
    const shallowComponent = shallow(<Team {...props} />);
    expect(shallowComponent).toMatchSnapshot();
});
