import React from 'react';
import renderer from 'react-test-renderer';
import KnowledgeStats from './KnowledgeStats';

it('renders correctly', () => {
    const component = renderer.create(
        <KnowledgeStats />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
