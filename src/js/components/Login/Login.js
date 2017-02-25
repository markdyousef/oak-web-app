// @flow
import React, { Component, PropTypes } from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';

import css from './Login.css';

class Login extends Component {
    static propTypes = {
        loginUser: PropTypes.func.isRequired,
        router: PropTypes.shape({
            push: PropTypes.func
        }).isRequired
    };
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: '',
            password: '',
            message: null
        };
    }
    onSubmit() {
        const { loginUser, router } = this.props;
        const { email, password } = this.state;

        // clear messsage
        this.setState({ message: null });

        // email validation
        if (email.length < 6) {
            return this.setState({ message: 'please provide a valid email'});
        }
        // password validation
        if (password.length < 6) {
            return this.setState({ message: 'your password should be at least 6 characters' });
        }
        return loginUser(email, password)
            .then((res) => {
                // save token to localstorage
                localStorage.authToken = res.data.loginUser;
                router.push('/');
            })
            .catch(err => this.setState({ message: err.errors[0].message }))
    }
    render() {
        const { email, password, message } = this.state;
        const { router } = this.props;
        return (
            <div className={css.container}>
                <div className={css.login}>
                    <h1>Login</h1>
                    <div className={css.inputs}>
                        <Input
                            title="Email"
                            value={email}
                            onChange={value => this.setState({ email: value })}
                            type="email"
                            placeholder="Email"
                        />
                        <Input
                            title="Password"
                            value={password}
                            onChange={value => this.setState({ password: value })}
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className={css.buttons}>
                        <Button
                            onClick={() => router.push('/signup')}
                            text="Create Account"
                            // type="transparent"
                        />
                        <Button
                            onClick={this.onSubmit}
                            text="Login"
                            type="primary"
                        />
                    </div>
                    <div className={css.message}>
                        {message &&
                            <div>
                                <h5>{message}</h5>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
