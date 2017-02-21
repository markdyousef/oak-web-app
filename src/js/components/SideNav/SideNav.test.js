import React from 'react';
import renderer from 'react-test-renderer';
import SideNav from './SideNav';

it('renders correctly', () => {
    const component = renderer.create(
        <SideNav />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
