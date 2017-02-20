import React from 'react';
import renderer from 'react-test-renderer';
import CardDetail from './CardDetail';

it('renders correctly', () => {
    const component = renderer.create(
        <CardDetail />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
