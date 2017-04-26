// @flow
import React from 'react';
import { shallow } from 'enzyme';
import CardDetail from './CardDetail';

jest.mock('draft-js/lib/generateRandomKey', () => () => '123');

it('renders correctly', () => {
    const props = {
        addLabel: () => {},
        createComment: () => {},
        create: () => {},
        removeLabel: () => {},
        update: () => {},
        params: {},
        router: {}
    };
    const component = shallow(
        <CardDetail {...props} />
    );
    // const tree = component.toJSON();
    expect(component).toMatchSnapshot();
});
