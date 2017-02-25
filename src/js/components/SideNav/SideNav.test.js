import React from 'react';
import renderer from 'react-test-renderer';
import SideNav from './SideNav';

it('renders correctly', () => {
    const props = {
        data: {}
    };
    const component = renderer.create(
        <SideNav {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
