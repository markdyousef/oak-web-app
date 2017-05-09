// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import EditLabel from './EditLabel';

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
        <EditLabel {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
