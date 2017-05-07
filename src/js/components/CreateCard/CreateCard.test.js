// @flow
import React from 'react';
import { shallow } from 'enzyme';
import CreateCard from './CreateCard';

it('renders correctly', () => {
    const props = {
    };
    const shallowComponent = shallow(
        <CreateCard {...props} />
    );
    expect(shallowComponent).toMatchSnapshot();
});
