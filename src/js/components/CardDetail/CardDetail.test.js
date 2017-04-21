// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import CardDetail from './CardDetail';

it('renders correctly', () => {
    const props = {
        addLabel: () => {},
        createComment: () => {},
        create: () => {},
        removeLabel: () => {},
        update: () => {},
        params: {},
        router: {}
    };
    const component = renderer.create(
        <CardDetail {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
