import React from 'react';
import renderer from 'react-test-renderer';
import AttachActionBox from './AttachActionBox';

it('renders correctly', () => {
    const props = {
        close: () => {}
    };
    const component = renderer.create(
        <AttachActionBox {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
