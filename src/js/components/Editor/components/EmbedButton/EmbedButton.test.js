import React from 'react';
import renderer from 'react-test-renderer';
import EmbedButton from './EmbedButton';

it('renders component correctly', () => {
    const props = {
        title: '',
        editorState: {},
        setEditorState: () => {},
        close: () => {}
    };
    const component = renderer.create(<EmbedButton {...props} />);
    expect(component).toMatchSnapshot(component);
});
