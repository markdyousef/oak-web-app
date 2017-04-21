// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import CreateLabels from './CreateLabels';

it('renders correctly', () => {
    const props = {
        changePage: () => {},
        labelColors: [],
        labelName: '',
        onChange: () => {},
        onCreate: () => {},
        selectedColor: '#000'

    };
    const component = renderer.create(
        <CreateLabels {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
