import React from 'react';
import { shallow } from 'enzyme';
import SettingsAccount from './SettingsAccount';

it('renders correctly', () => {
    const props = {
        updatePassword: () => {}
    };
    const shallowComponent = shallow(<SettingsAccount {...props} />);
    expect(shallowComponent).toMatchSnapshot();
});
