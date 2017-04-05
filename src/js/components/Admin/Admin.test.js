import React from 'react';
import { shallow } from 'enzyme';
import Admin from './Admin';

it('renders correctly', () => {
    const props = {
        createTeam: () => {},
        data: {},
        router: {},
        location: {}
    };
    const shallowComponent = shallow(<Admin {...props} />);
    expect(shallowComponent).toMatchSnapshot();
});
