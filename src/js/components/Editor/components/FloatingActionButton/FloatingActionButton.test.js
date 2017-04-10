import React from 'react';
import renderer from 'react-test-renderer';
import FloatingActionButton from './FloatingActionButton';

it('renders component correctly', () => {
    const props = {
        editorState: {},
        focus: () => {},
        setEditorState: () => {}
    };
    const component = renderer.create(<FloatingActionButton {...props} />);
    expect(component).toMatchSnapshot(component);
});
