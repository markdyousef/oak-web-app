import React from 'react';
import { shallow } from 'enzyme';
import Editor from './Editor';

it('renders correctly', () => {
    const props = {
    };
    const shallowComponent = shallow(
        <Editor {...props} />
    );
    expect(shallowComponent).toMatchSnapshot();
});
