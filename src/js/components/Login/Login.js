// @flow
import React, { Component, PropTypes } from 'react';

import css from './Login.css';

class Login extends Component {
    static propTypes = {};
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <div className={css.container}>
                LOGIN
            </div>
        );
    }
}

export default Login;
