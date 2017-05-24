// @flow
import React from 'react';
import { shallow } from 'enzyme';
import CardDetail from './CardDetail';

jest.mock('draft-js/lib/generateRandomKey', () => () => '123');

it('renders correctly', () => {
    const props = {

    };
    const component = shallow(
        <CardDetail {...props} />
    );
    // const tree = component.toJSON();
    expect(component).toMatchSnapshot();
});
