import React from 'react';
import { shallow } from 'enzyme';
import Admin from './Admin';

it('renders correctly', () => {
    const shallowComponent = shallow(<Admin />);
    expect(shallowComponent).toMatchSnapshot();
});
