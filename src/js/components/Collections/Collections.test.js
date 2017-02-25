import React from 'react';
import renderer from 'react-test-renderer';
import Collections from './Collections';

it('renders correctly', () => {
    const props = {
        data: {}
    };
    const component = renderer.create(
        <Collections {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
