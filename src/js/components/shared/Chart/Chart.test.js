// @flow
import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Chart from './Chart';

test('renders Chart', () => {
    const props = {
        items: [],
        type: null,
        title: null
    };
    const shallowComponent = shallow(
        <Chart {...props} />
    );
    expect(shallowComponent).toMatchSnapshot();
});
