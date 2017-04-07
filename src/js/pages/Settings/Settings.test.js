import React from 'react';
import { shallow } from 'enzyme';
import Settings from './Settings';

it('renders correctly', () => {
    const shallowComponent = shallow(<Settings />);
    expect(shallowComponent).toMatchSnapshot();
});
