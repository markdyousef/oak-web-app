// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import Input from '../shared/Input';
import { Box, ErrorMessage, ChangePage } from '../../styles';
import { NextButton } from '../shared/Button';
import Arrow from '../../icons/rightArrow';

const Container = styled.section`
    width: 100%;
`;

type Props = {
    resetPassword: (token: string, password: string) => Object
};

type State = {
    password: string,
    passwordRepeat: string,
    message: ?string,
    token: string
};

type DefaultProps = {};

export default class ResetPassword extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps;
    props: Props;
    state: State;
    constructor() {
        super();
        this.state = {
            password: '',
            passwordRepeat: '',
            message: '',
            token: ''
        };
    }
    componentWillMount() {
        const token = new URLSearchParams(location.search).get('token');
        this.setState({ token });
    }
    onSubmit = () => {
        const { resetPassword } = this.props;
        const { password, passwordRepeat, token } = this.state;
        this.setState({ message: null });

        // password validation
        if (password.length < 6) {
            this.setState({ message: 'Your password must be at least 6 characters' });
            return;
        }
        // check if passwords match
        if (password !== passwordRepeat) {
            this.setState({ message: "Your passwords doesn't match." });
            return;
        }
        resetPassword(token, password)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    render() {
        const { password, passwordRepeat, message } = this.state;
        return (
            <Container>
                <Box>
                    <h1>Reset Password</h1>
                    <div>
                        <Input
                            title="new password"
                            value={password}
                            onChange={value => this.setState({ password: value, message: null })}
                            type="password"
                            placeholder="Enter a new password"
                        />
                        <Input
                            title="confirm password"
                            value={passwordRepeat}
                            onChange={value => this.setState({ passwordRepeat: value, message: null })}
                            type="password"
                            placeholder="Confirm new password"
                            onKeyDown={(e) => {
                                if (e.keyCode === 13) {
                                    this.onSubmit();
                                }
                            }}
                        />
                    </div>
                    <div>
                        <NextButton
                            onClick={this.onSubmit}
                            icon={<Arrow />}
                            text="Reset Password"
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
                    <p>Did you remember your old password? <Link to="/login">Sign in!</Link></p>
                </ChangePage>
            </Container>
        );
    }
}
