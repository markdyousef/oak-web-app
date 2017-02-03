// @flow
import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import MessageTone from './MessageTone';

test('renders MessageTone', () => {
    const props = {
        channels: [],
        getTeam: () => {},
        name: 'clai'
    };
    const shallowComponent = shallow(
        <MessageTone {...props} />
    );
    expect(shallowComponent).toMatchSnapshot();
});
