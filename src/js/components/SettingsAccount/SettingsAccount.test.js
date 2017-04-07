import React from 'react';
import { shallow } from 'enzyme';
import SettingsAccount from './SettingsAccount';

it('renders correctly', () => {
    const shallowComponent = shallow(<SettingsAccount />);
    expect(shallowComponent).toMatchSnapshot();
});
