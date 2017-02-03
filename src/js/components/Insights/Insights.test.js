// @flow
import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Insights from './Insights';

test('renders Insights', () => {
    const props = {
        insights: {}
    };
    const shallowComponent = shallow(
        <Insights {...props} />
    );
    expect(shallowComponent).toMatchSnapshot();
});
