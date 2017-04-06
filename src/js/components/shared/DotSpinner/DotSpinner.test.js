import React from 'react';
import { shallow } from 'enzyme';
import DotSpinner from './DotSpinner';

it('renders correctly', () => {
    const shallowComponent = shallow(<DotSpinner />);
    expect(shallowComponent).toMatchSnapshot();
});
