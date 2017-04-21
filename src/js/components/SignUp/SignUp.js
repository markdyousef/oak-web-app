// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import Input from '../shared/Input';
import { NextButton } from '../shared/Button';
import { Box, ErrorMessage, ChangePage, Container, Footer } from '../../styles';
import arrowIcon from '../../icons/rightArrow';

type DefaultProps = {};

type Props = {
    createUser: (name: string, email: string, password: string, inviteToken: string) => Object,
};

type State = {
    name: string,
    email: string,
    password: string,
    message: ?string,
    token: string
};

export default class SignUp extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps;
    props: Props;
    state: State;
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            message: null,
            token: ''
        };
    }
    componentWillMount() {
        const token = new URLSearchParams(location.search).get('token');
        this.setState({ token });
    }
    onSubmit = () => {
        const { createUser } = this.props;
        const { name, email, password, token } = this.state;

        // clear messsage
        this.setState({ message: null });

        // name validation
        if (name.length < 2) {
            return this.setState({ message: 'please provide a valid name' });
        }
        // email validation
        if (email.length < 6) {
            return this.setState({ message: 'please provide a valid email' });
        }
        // password validation
        if (password.length < 6) {
            return this.setState({ message: 'your password should be at least 6 characters' });
        }
        return createUser(name, email, password, token)
            .then(() => this.setState({ message: 'Your account has been created ' }))
            .catch(err => this.setState({ message: 'Lame!' }));
    }
    render() {
        const { name, email, password, message } = this.state;
        return (
            <Container>
                <Box>
                    <h1>Create Account</h1>
                    <div>
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
                    <div>
                        <NextButton
                            text="Create"
                            icon={arrowIcon}
                            onClick={this.onSubmit}
                        />
                    </div>
                    <div>
                        {message &&
                            <ErrorMessage>
                                <h5>{message}</h5>
                            </ErrorMessage>
                        }
                    </div>
                </Box>
                <ChangePage>
                    <p>Already have a user? <Link to="/login">Sign in!</Link></p>
                </ChangePage>
                <Footer />
            </Container>
        );
    }
}
