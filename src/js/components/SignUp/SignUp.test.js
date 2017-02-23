import React from 'react';
import renderer from 'react-test-renderer';
import SignUp from './SignUp';

it('renders correctly', () => {
    const props = {
        router: {},
        createUser: () => {}
    };
    const component = renderer.create(
        <SignUp {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
