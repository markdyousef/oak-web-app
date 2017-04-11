import React from 'react';
import { shallow } from 'enzyme';
import CardDetail from './CardDetail';

it('renders correctly', () => {
    const props = {
        params: {
            collectionId: '1',
            cardId: '2'
        },
        update: () => {},
        data: {},
        close: () => {},
        create: () => {},
        router: {
            goBack: () => {}
        }
    };
    const shallowComponent = shallow(
        <CardDetail {...props} />
    );
    expect(shallowComponent).toMatchSnapshot();
});
