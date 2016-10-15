import React from 'react';
// import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Home from './Home';


// describe('Home', () => {
//     const wrapper = shallow(<Home />);
//
//     it('renders as a <div>', () => {
//         expect(wrapper.type()).to.eql('div');
//     });
//
//     it('contains a header', () => {
//         expect(wrapper.find('h1')).to.have.length(1);
//     });
// });

test('Home renders', () => {
    const component = renderer.create(
        <Home />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
