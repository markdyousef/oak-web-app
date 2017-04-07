import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';

it('renders correctly', () => {
    const props = {
        creatorId: '1',
        updatedAt: '',
        onShow: () => {},
        onRemove: () => {},
        onLike: () => {},
        showComments: () => {},
        creator: { avatar: {} }
    };
    const component = renderer.create(
        <Card {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
