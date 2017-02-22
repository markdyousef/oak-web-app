// @flow
import React, { Component, PropTypes } from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';

import css from './SignUp.css';

class SignUp extends Component {
    static propTypes = {
        router: PropTypes.shape({
            push: PropTypes.func
        }).isRequired
    };
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }
    render() {
        const { email, password } = this.state;
        const { router } = this.props;
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
                            text="CREATE"
                            type="primary"
                        />
                        <Button
                            onClick={() => router.push('/')}
                            text="LOGIN"
                            // type="transparent"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
