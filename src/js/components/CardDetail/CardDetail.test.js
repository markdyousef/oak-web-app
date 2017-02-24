import React from 'react';
import { shallow } from 'enzyme';
import CardDetail from './CardDetail';

it('renders correctly', () => {
    const props = {
        close: () => {},
        router: {
            goBack: () => {}
        }
    };
    const shallowComponent = shallow(
        <CardDetail {...props} />
    );
    expect(shallowComponent).toMatchSnapshot();
});
