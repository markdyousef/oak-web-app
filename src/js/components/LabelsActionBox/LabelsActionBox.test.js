import React from 'react';
import renderer from 'react-test-renderer';
import LabelsActionBox from './LabelsActionBox';

it('renders correctly', () => {
    const props = {
        close: () => {}
    };
    const component = renderer.create(
        <LabelsActionBox {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
