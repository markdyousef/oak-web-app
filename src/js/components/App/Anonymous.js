// @flow
import React, { Component, PropTypes } from 'react';
import LoginNav from '../LoginNav';
import css from './App.css';


// Localstorage token
const token = localStorage.authToken;

class Anonymous extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        location: PropTypes.shape({
            pathname: PropTypes.string
        }).isRequired,
        router: PropTypes.shape({
            replace: PropTypes.func.isRequired
        }).isRequired
    };
    constructor() {
        super();
        this.state = {};
    }
    componentWillMount() {
        const { router, location } = this.props;
        if (token && token.length > 0) {
            router.replace({
                pathname: '/',
                state: { nextPathname: location.pathname }
            });
        }
    }
    render() {
        return (
            <div className={[css.container, css.anonymous].join(' ')}>
                <LoginNav />
                {this.props.children}
            </div>
        );
    }
}

export default Anonymous;
