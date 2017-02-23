import React from 'react';
import renderer from 'react-test-renderer';
import Login from './Login';

it('renders correctly', () => {
    const props = {
        loginUser: () => {},
        router: {}
    }
    const component = renderer.create(
        <Login {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
