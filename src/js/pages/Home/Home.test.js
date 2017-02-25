import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

it('renders correctly', () => {
    const shallowComponent = shallow(<Home />)
    expect(shallowComponent).toMatchSnapshot();
});
