import React from 'react';
import renderer from 'react-test-renderer';
import LabelsActionBox from './LabelsActionBox';

it('renders correctly', () => {
    const props = {
        close: () => {},
        createLabel: () => {},
        addLabel: () => {},
        removeLabel: () => {},
        collectionId: '1',
        cardId: '2',
        collection: {},
        card: {}
    };
    const component = renderer.create(
        <LabelsActionBox {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
