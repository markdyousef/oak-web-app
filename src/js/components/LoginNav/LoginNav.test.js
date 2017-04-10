import React from 'react';
import renderer from 'react-test-renderer';
import LoginNav from './LoginNav';

it('renders correctly', () => {
    const props = {
    };
    const component = renderer.create(
        <LoginNav {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
