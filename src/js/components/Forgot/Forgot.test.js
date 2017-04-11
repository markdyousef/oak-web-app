import React from 'react';
import renderer from 'react-test-renderer';
import Forgot from './Forgot';

it('renders correctly', () => {
    const props = {
        resetPassword: () => {},
        router: {}
    }
    const component = renderer.create(
        <Forgot {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
