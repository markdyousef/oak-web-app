import React from 'react';
import { shallow } from 'enzyme';
import CollectionDetail from './CollectionDetail';

it('renders correctly', () => {
    const props = {
        params: {},
        router: {},
        data: {}
    }
    const shallowComponent = shallow(
        <CollectionDetail {...props} />
    );
    expect(shallowComponent).toMatchSnapshot();
});
