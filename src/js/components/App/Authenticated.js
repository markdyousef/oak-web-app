// @flow
import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import TopNav from '../TopNav';
import SideNav from '../SideNav';

import css from './App.css';

// Localstorage token
const token = localStorage.authToken;

class Authenticated extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        router: PropTypes.shape({
            replace: PropTypes.func.isRequired
        }).isRequired
    };
    constructor() {
        super();
        this.state = {};
    }
    componentWillMount() {
        const { router } = this.props;
        if (!token) {
            router.replace({
                pathname: '/login'
            });
        }
    }
    render() {
        if (!token) return null;

        return (
            <div className={css.container}>
                <SideNav />
                <div className={css.right}>
                    <TopNav />
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default withRouter(Authenticated);
