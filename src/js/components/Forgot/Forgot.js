// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import Input from '../shared/Input';
import { Box, ErrorMessage, ChangePage, Container, Footer } from '../../styles';
import { NextButton } from '../shared/Button';
import Arrow from '../../icons/rightArrow';

type Props = {
    resetPassword: (email:string) => Object
};

type State = {
    email: string,
    message: ?string
};

type DefaultProps = {};

export default class Login extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps;
    props: Props;
    state: State;
    constructor() {
        super();
        this.state = {
            email: '',
            message: null
        };
    }
    onSubmit = () => {
        const { resetPassword } = this.props;
        const { email } = this.state;

        // clear messsage
        this.setState({ message: null });
        return resetPassword(email)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    render() {
        const { email, message } = this.state;
        return (
            <Container>
                <Box>
                    <h1>Reset password</h1>
                    <div>
                        <Input
                            title="EMAIL"
                            value={email}
                            onChange={value => this.setState({ email: value, message: null })}
                            type="email"
                            placeholder="Email"
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
                            text="Reset password"
                            icon={<Arrow />}
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
