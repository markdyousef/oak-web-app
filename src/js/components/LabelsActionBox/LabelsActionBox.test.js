// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import LabelsActionBox from './LabelsActionBox';

it('renders correctly', () => {
    const props = {
        changeCardLabel: () => {},
        collectionId: '1',
        createLabel: () => {},
        updateLabels: () => {},
        update: () => {},
        updateCard: () => {},
        delete: () => {},
        createCard: () => {},
        editLabel: () => {},
        removeLabel: () => {},
        cardId: null,
        data: {
            loading: true,
            refetch: () => {}
        }

    };
    const component = renderer.create(
        <LabelsActionBox {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
