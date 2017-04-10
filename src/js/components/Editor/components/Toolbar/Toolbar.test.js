import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from './Toolbar';

it('renders without crashing', () => {
    const props = {
        editorState: {
        },
        toggleBlockType: () => {},
        toggleInlineStyle: () => {},
        focus: () => {},
        showToolbar: true
    };
    const shallowComponent = shallow(<Toolbar {...props} />);
    expect(shallowComponent).toMatchSnapshot(shallowComponent);
});
