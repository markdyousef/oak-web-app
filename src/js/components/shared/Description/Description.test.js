import React from 'react';
import { shallow } from 'enzyme';
import Description from './Description';

it('renders correctly', () => {
    const shallowComponent = shallow(
        <Description />
    )
    expect(shallowComponent).toMatchSnapshot();
});
