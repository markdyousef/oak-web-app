import React from 'react';
import { shallow } from 'enzyme';
import CollectionToolbar from './CollectionToolbar';

it('renders correctly', () => {
    const shallowComponent = shallow(<CollectionToolbar />);
    expect(shallowComponent).toMatchSnapshot();
});
