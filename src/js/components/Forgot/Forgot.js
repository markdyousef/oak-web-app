// @flow
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import Input from '../shared/Input';
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
    padding: 45px 100px;
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
    max-width: 250px;
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
        resetPassword: PropTypes.func.isRequired,
        router: PropTypes.shape({
            replace: PropTypes.func
        }).isRequired
    };
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: '',
            message: null
        };
    }
    onSubmit() {
        const { resetPassword, router } = this.props;
        const { email } = this.state;

        // clear messsage
        this.setState({ message: null });
        return resetPassword(email)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    render() {
        const { email, password, message } = this.state;
        const { router } = this.props;
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
                        <Button
                            onClick={this.onSubmit}
                        >
                            Reset password
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
                    <p>Remember your password? <Link to="/login">Sign in!</Link></p>
                </Forgot>
            </Container>
        );
    }
}

export default Login;
