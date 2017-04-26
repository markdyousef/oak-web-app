// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import Input from '../shared/Input';
import { saveToken } from '../../utils';
import { Box, ErrorMessage, ChangePage, Container, Footer } from '../../styles';
import Arrow from '../../icons/rightArrow';
import { NextButton } from '../shared/Button';

type DefaultProps = {};

type Props = {
    loginUser: Function,
    router: Object
};

type State = {
    email: string,
    password: string,
    message: ?string
};

class Login extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps;
    props: Props;
    state: State;
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            message: null
        };
    }
    onSubmit = () => {
        const { loginUser, router } = this.props;
        const { email, password } = this.state;

        // clear messsage
        this.setState({ message: null });

        // email validation
        if (email.length < 6) {
            return this.setState({ message: 'please provide a valid email' });
        }
        // password validation
        if (password.length < 6) {
            return this.setState({ message: 'your password should be at least 6 characters' });
        }
        return loginUser(email, password)
            .then((res) => {
                // save token to localstorage
                saveToken(res.data.loginUser);
                router.replace({
                    pathname: '/home'
                });
                window.location.reload();
            })
            .catch(err => this.setState({ message: err.graphQLErrors[0].message }));
    }
    render() {
        const { email, password, message } = this.state;
        return (
            <Container>
                <Box>
                    <h1>Sign in to Cuest</h1>
                    <div>
                        <Input
                            title="EMAIL"
                            value={email}
                            onChange={value => this.setState({ email: value, message: null })}
                            type="email"
                            placeholder="Email"
                        />
                        <Input
                            title="PASSWORD"
                            value={password}
                            onChange={value => this.setState({ password: value, message: null })}
                            type="password"
                            placeholder="Password"
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
                            text="Sign in"
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
                    <p>Forgot your password? <Link to="/forgot">Get a new one</Link></p>
                </ChangePage>
                <Footer />
            </Container>
        );
    }
}

export default Login;
