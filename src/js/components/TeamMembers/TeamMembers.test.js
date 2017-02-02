// @flow
import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import TeamMembers from './TeamMembers';

test('renders TeamMembers', () => {
    const props = {
    };
    const shallowComponent = shallow(
        <TeamMembers {...props} />
    );
    expect(shallowComponent).toMatchSnapshot();
});
