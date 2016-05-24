/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

import React from 'react';
import { findDOMNode } from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Sidebar from './Sidebar';

import sinon from 'sinon';
import { shallow, mount } from 'enzyme';


describe('Sidebar 0', () => {
    it('calls componentDidMount', () => {
        sinon.spy(Sidebar.prototype, 'componentDidMount');

        const props = {
            onMount: () => {},
            isActive: false
        };

        // const wrapper = mount(<Sidebar {...props} />);
        mount(<Sidebar {...props} />);

        expect(Sidebar.prototype.componentDidMount.calledOnce).to.be.true;
        Sidebar.prototype.componentDidMount.restore();
    });

    it('calls onMount prop once it mounts', () => {
        // create a spy for the onMount function
        const props = { onMount: sinon.spy() };

        // mount our component
        mount(<Sidebar {...props} />);

        // expect that onMount was called
        expect(props.onMount.calledOnce).to.be.true;
    });

    it('should render as a <ul>', () => {
        const props = { onMount: () => {} };
        const wrapper = shallow(<Sidebar {...props} />);
        expect(wrapper.type()).to.eql('ul');
    });

    describe('when active...', () => {
        const wrapper = shallow(
            // just passing isActive is an alias for true
            <Sidebar onMount={() => {}} isActive />
        );
        it('should render with className active-list', () => {
            expect(wrapper.prop('className')).to.eql('active-list');
        });
    });

    describe('when inactive...', () => {
        const wrapper = shallow(
            <Sidebar onMount={() => {}} isActive={false} />
        );
        it('should render with className inactive-list', () => {
            expect(wrapper.prop('className')).to.eql('inactive-list');
        });
    });
});


// Test for jsdom

describe('Sidebar 1', () => {
    it('has button that fires a dom event for click', (done) => {
        function handleClick() {
            done();
        }

        const detachedComp = TestUtils.renderIntoDocument(<Sidebar onMount={() => {}} onClick={handleClick} />);
        const button = TestUtils.findRenderedDOMComponentWithTag(detachedComp, 'ul');
        const buttonNode = findDOMNode(button);

        expect(buttonNode).to.exist;

        TestUtils.Simulate.click(buttonNode);
    });
});
