import React from 'react';
import renderer from 'react-test-renderer';
import AttachActionBox from './AttachActionBox';

it('renders correctly', () => {
    const component = renderer.create(
        <AttachActionBox />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
