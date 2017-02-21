import React from 'react';
import renderer from 'react-test-renderer';
import LabelsActionBox from './LabelsActionBox';

it('renders correctly', () => {
    const component = renderer.create(
        <LabelsActionBox />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
