import React from 'react';
import renderer from 'react-test-renderer';
import StyleButton from './StyleButton';

it('renders component correctly', () => {
    const props = {
        onToggle: () => {},
        style: '',
        label: '',
        active: false
    };
    const component = renderer.create(<StyleButton {...props} />);
    expect(component).toMatchSnapshot(component);
});
