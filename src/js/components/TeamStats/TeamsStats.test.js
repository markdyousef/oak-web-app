// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import TeamStats from './TeamStats';

test('renders TeamStats', () => {
    const props = {
        data: {
            name: 'general'
        }
    };
    const component = renderer.create(
        <TeamStats {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
