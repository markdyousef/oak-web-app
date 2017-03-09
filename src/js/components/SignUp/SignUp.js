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
            name: '',
            email: '',
            password: '',
            message: null
        };
    }
    onSubmit() {
        const { createUser } = this.props;
        const { name, email, password } = this.state;

        // clear messsage
        this.setState({ message: null });

        // name validation
        if (name.length < 2) {
            return this.setState({ message: 'please provide a valid name'});
        }
        // email validation
        if (email.length < 6) {
            return this.setState({ message: 'please provide a valid email'});
        }
        // password validation
        if (password.length < 6) {
            return this.setState({ message: 'your password should be at least 6 characters' });
        }
        return createUser(name, email, password)
            .then(() => this.setState({ message: { type: 'success', text: 'Your account has been created ' } }))
            .catch(err => this.setState({ message: { type: 'failed', text: 'Lame!' } }));
    }
    render() {
        const { name, email, password, message } = this.state;
        const { router } = this.props;
        return (
            <div className={css.container}>
                <div className={css.signup}>
                    <h1>Create Account</h1>
                    <div className={css.inputs}>
                        <Input
                            title="Name"
                            value={name}
                            onChange={value => this.setState({ name: value, message: null })}
                            type="name"
                            placeholder="Name"
                        />
                        <Input
                            title="Email"
                            value={email}
                            onChange={value => this.setState({ email: value, message: null })}
                            type="email"
                            placeholder="Email"
                        />
                        <Input
                            title="Password"
                            value={password}
                            onChange={value => this.setState({ password: value, message: null })}
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className={css.buttons}>
                        <Button
                            onClick={() => router.push('/')}
                            text="Login"
                            // type="transparent"
                        />
                        <Button
                            onClick={this.onSubmit}
                            text="Create Account"
                            type="primary"
                        />
                    </div>
                    <div className={css.message}>
                        {message &&
                            <div className={(message.type === 'success') ? css.success : null}>
                                <h5>{message.text}</h5>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
