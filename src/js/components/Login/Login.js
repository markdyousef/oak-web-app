// @flow
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import Input from '../shared/Input';
import { saveToken } from '../../utils';
import colors from '../../styles/colors';
import Arrow from '../../icons/rightArrow';

const Container = styled.section`
    width: 100%;
`;

const Box = styled.div`
    margin: auto;
    margin-top: 125px;
    width: 480px;
    ${''/* height: 380px; */}
    background-color: ${colors.white};
    padding: 64px 100px;
    display: flex;
    flex-direction: column;
    border: 1px solid ${colors.lightGrey};
    border-radius: 3px;
    & h1 {
        font-size: 32px;
        font-weight: bold;
        text-align: center;
    }
    & div {
        margin-top: 15px;
    }
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${colors.green};
    border-radius: 3px;
    border: 1px solid ${colors.green};
    color: ${colors.white};
    font-size: 15px;
    font-weight: bold;
    font-family: 'Proxima Nova';
    padding: 12px;
    cursor: pointer;
    &:hover {
        box-shadow: inset 0 -2px rgba(0, 0, 0, 0.15);
        transition: 0.2s;
    }
    &:after {
        box-shadow: inset 0 -2px rgba(0, 0, 0, 0.15);
        transition: 0.2s;
    }
    & svg {
        fill: ${colors.white};
        margin-left: 5px;
    }
`;


const ErrorMessage = styled.div`
    width: 100%;
    background-color: ${colors.orange};
    border-radius: 3px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.white};
`;

const Forgot = styled.div`
    max-width: 300px;
    margin: auto;
    margin-top: 32px;
    color: ${colors.grey};
    & a {
        font-weight: bold;
        color: ${colors.grey};
    }
`;

class Login extends Component {
    static propTypes = {
        loginUser: PropTypes.func.isRequired,
        router: PropTypes.shape({
            replace: PropTypes.func
        }).isRequired
    };
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
            return this.setState({ message: 'please provide a valid email'});
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
            .catch(err => console.log(err));
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
                        <Button
                            onClick={this.onSubmit}
                        >
                            Sign in
                            <Arrow />
                        </Button>
                    </div>
                    <div>
                        {message &&
                            <ErrorMessage>
                                <h5>{message}</h5>
                            </ErrorMessage>
                        }
                    </div>
                </Box>
                <Forgot>
                    <p>Forgot your password? <Link to="/forgot">Get a new one</Link></p>
                </Forgot>
            </Container>
        );
    }
}

export default Login;
