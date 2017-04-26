// @flow
import React from 'react';
import { shallow } from 'enzyme';
import CommentBox from './CommentBox';

jest.mock('draft-js/lib/generateRandomKey', () => () => '123');


it('renders correctly', () => {
    const props = {
        createComment: () => {}
    };
    const shallowComponent = shallow(
        <CommentBox {...props} />
    );
    expect(shallowComponent).toMatchSnapshot();
});
