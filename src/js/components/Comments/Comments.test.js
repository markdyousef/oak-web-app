import React from 'react';
import { shallow } from 'enzyme';
import Comments from './Comments';

it('renders correctly', () => {
    const props = {
    };
    const shallowComponent = shallow(
        <Comments {...props} />
    );
    expect(shallowComponent).toMatchSnapshot();
});
