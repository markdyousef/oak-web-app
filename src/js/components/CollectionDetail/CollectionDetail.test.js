import React from 'react';
import { shallow } from 'enzyme';
import CollectionDetail from './CollectionDetail';

it('renders correctly', () => {
    const shallowComponent = shallow(
        <CollectionDetail />
    );
    expect(shallowComponent).toMatchSnapshot();
});
