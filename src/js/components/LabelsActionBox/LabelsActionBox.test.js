// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import LabelsActionBox from './LabelsActionBox';

it('renders correctly', () => {
    const props = {
        changeCardLabel: () => {},
        collectionId: '1',
        createLabel: () => {},
        data: {
            loading: true,
            refetch: () => {}
        },
        labels: [],
        onClose: () => {}

    };
    const component = renderer.create(
        <LabelsActionBox {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
