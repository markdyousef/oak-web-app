// @flow
import React from 'react';
import { shallow } from 'enzyme';
import TopBar from './TopBar';

test('renders TopBar', () => {
    const props = {
        data: {}
    };
    const component = shallow(<TopBar />);
    // const tree = component.toJSON();
    expect(component).toMatchSnapshot();
});
