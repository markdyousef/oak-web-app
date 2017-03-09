import React from 'react';
import { shallow } from 'enzyme';
import Team from './Team';

it('renders correctly', () => {
    const shallowComponent = shallow(<Team />);
    expect(shallowComponent).toMatchSnapshot();
});
