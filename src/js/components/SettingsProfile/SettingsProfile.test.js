import React from 'react';
import { shallow } from 'enzyme';
import SettingsProfile from './SettingsProfile';

it('renders correctly', () => {
    const props = {

    }
    const shallowComponent = shallow(<SettingsProfile {...props} />);
    expect(shallowComponent).toMatchSnapshot();
});
