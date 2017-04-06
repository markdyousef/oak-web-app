import React from 'react';
import { shallow } from 'enzyme';
import CollectionDetail from './CollectionDetail';

it('renders correctly', () => {
    const props = {
        params: {},
        router: {},
        data: {
            loading: true
        },
        removeCard: () => {},
        likeCard: () => {},
        unlikeCard: () => {}
    };
    const shallowComponent = shallow(
        <CollectionDetail {...props} />
    );
    expect(shallowComponent).toMatchSnapshot();
});
