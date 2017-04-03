import React from 'react';
import { shallow } from 'enzyme';
import TextField from './TextField';

it('renders correctly', () => {
    const props = {
        onChange: () => {}
    }
    const shallowComponent = shallow(<TextField {...props} />);
    expect(shallowComponent).toMatchSnapshot();
});
