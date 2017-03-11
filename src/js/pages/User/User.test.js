import React from 'react';
import { shallow } from 'enzyme';
import User from './User';

it('renders correctly', () => {
    const props = {
        children: null
    }
    const shallowComponent = shallow(<User {...props} />);
    expect(shallowComponent).toMatchSnapshot();
});
