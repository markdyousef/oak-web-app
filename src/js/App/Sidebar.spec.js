/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

/* import React from 'react';

// Once we set up Karma to run our tests through webpack
// we will no longer need to have these long relative paths
import Sidebar from './Sidebar';
import {
    describeWithDOM,
    mount,
    shallow,
    spyLifecycle
} from 'enzyme';


describe('(Component) Sidebar', () => {
    // using special describeWithDOM helper that enzyme
    // provides so if other devs on my team don't have JSDom set up
    // properly or are using old version of node it won't bork their test suite
    //
    // All of our tests that depend on mounting should go inside one of these
    // special describe blocks
    describeWithDOM('Lifecycle methods', () => {
        it('calls componentDidMount', () => {
            spyLifecycle(Sidebar);

            const props = {
                onMount: () => {},  // an anonymous function in ES6 arrow syntax
                isActive: false
            };

            // using destructuring to pass props down
            // easily and then mounting the component
            mount(<Sidebar {...props} />);

            // Sidebar's componentDidMount should have been
            // called once.  spyLifecyle attaches sinon spys so we can
            // make this assertion
            expect(
                Sidebar.prototype.componentDidMount.calledOnce
            ).to.be.true;
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
});*/
