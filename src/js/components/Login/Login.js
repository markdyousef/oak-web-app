// @flow
import React, { Component, PropTypes } from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';

import css from './Login.css';

class Login extends Component {
    static propTypes = {};
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    render() {
        const { email, password } = this.state;
        return (
            <div className={css.container}>
                <div className={css.login}>
                    <div className={css.inputs}>
                        <Input
                            title="Email"
                            value={email}
                            onChange={value => this.setState({ email: value })}
                            type="email"
                        />
                        <Input
                            title="Password"
                            value={password}
                            onChange={value => this.setState({ password: value })}
                            type="password"
                        />
                    </div>
                    <div className={css.buttons}>
                        <Button
                            onClick={() => {}}
                            text="LOGIN"
                            type="primary"
                        />
                        <Button
                            onClick={() => {}}
                            text="CREATE"
                            // type="transparent"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;