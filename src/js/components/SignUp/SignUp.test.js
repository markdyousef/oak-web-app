import React from 'react';
import renderer from 'react-test-renderer';
import SignUp from './SignUp';

it('renders correctly', () => {
    const component = renderer.create(
        <SignUp />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
