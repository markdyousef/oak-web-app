/* eslint-disable no-undef */
import React from 'react';
// import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';

// const wrapper = shallow(
//     <App />
// );

it('renders correctly', () => {
    const component = renderer.create(
        <App />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

// it('renders as a <div>', () => {
//     expect(wrapper.type()).to.eql('div');
// });
