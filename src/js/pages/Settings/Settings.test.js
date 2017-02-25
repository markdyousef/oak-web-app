import React from 'react';
import renderer from 'react-test-renderer';
import Settings from './Settings';

it('renders correctly', () => {
    const props = {
        router: {}
    };
    const component = renderer.create(
        <Settings {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
