import React from 'react';
import renderer from 'react-test-renderer';
import Profile from './Profile';

it('renders correctly', () => {
    const props = {
        data: {
            me: {
                name: 'mark',
                username: 'mark'
            }
        }
    };
    const component = renderer.create(
        <Profile {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
