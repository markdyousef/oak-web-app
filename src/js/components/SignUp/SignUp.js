// @flow
import React, { Component, PropTypes } from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';

import css from './SignUp.css';

class SignUp extends Component {
    static propTypes = {
        createUser: PropTypes.func.isRequired,
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
        const { createUser } = this.props;
        const { email, password } = this.state;

        if (email.length < 6) {
            return this.setState({ message: 'please provide a valid email'});
        }
        if (password.length < 6) {
            return this.setState({ message: 'your password should be at least 6 characters' });
        }
        return createUser(email, password)
            .then(res => console.log(res))
            .catch(err => this.setState({ message: err.errors[0].message }))
    }
    render() {
        const { email, password, message } = this.state;
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
                            onClick={this.onSubmit}
                            text="CREATE"
                            type="primary"
                        />
                        <Button
                            onClick={() => router.push('/')}
                            text="LOGIN"
                            // type="transparent"
                        />
                    </div>
                    {message &&
                        <div className={css.message}>
                            <h5>{message}</h5>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default SignUp;
