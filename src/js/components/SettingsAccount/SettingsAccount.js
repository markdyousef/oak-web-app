import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Input from '../shared/Input';
import Button from '../shared/Button';
import SavedIcon from '../../icons/saved';

const Container = styled.section`
    width: 100%;
    height: 100%;
    & h1 {
        margin-bottom: 20px;
    }
    & h5 {
        margin: 10px 5px;
        font-size: 14px;
        line-height: 17px;
        color: ${colors.grey}
    }
    & span {
        font-weight: bold;
    }
`;

const InputContainer = styled.div`
    margin-top: 20px;
`;

const ErrorBox = styled.div`
    height: 40px;
    color: ${colors.red}
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Saved = styled.div`
    color: ${colors.green};
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 16px;
    & svg {
        fill: ${colors.green};
        height: 18;
        width: 18;
        margin-right: 5px;
    }
`;

export default class SettingsAccount extends Component {
    static propTypes = {
        updatePassword: PropTypes.func.isRequired
    }
    constructor() {
        super();
        this.state = {
            password: '',
            newPassword: '',
            confirmPassword: '',
            errorMessage: null,
            isSaved: false,
            errorField: null
        };
    }
    onSave = () => {
        const { password, newPassword, confirmPassword } = this.state;
        const { updatePassword } = this.props;

        if (confirmPassword !== newPassword) {
            this.setState({
                errorMessage: "New and confirmed password doesn't match",
                errorField: 'repeat'
            });
        }

        updatePassword(password, newPassword)
            .then(() => this.setState({ isSaved: true }))
            .catch((err) => console.log(err));
    }
    changeField = (key:String, value:String) => {
        switch (key) {
        case 'password':
            this.setState({ password: value });
            break;
        case 'newPassword':
            this.setState({ newPassword: value });
            break;
        case 'confirmPassword':
            this.setState({ confirmPassword: value });
            break;
        default:
            break;
        }
        this.setState({ errorMessage: null, isSaved: false, errorField: null });
    }
    render() {
        const { password, newPassword, confirmPassword, errorMessage, isSaved, errorField } = this.state;
        return (
            <Container>
                <h1>Account</h1>
                <InputContainer>
                    <Input
                        value={password}
                        type="password"
                        onChange={value => this.changeField('password', value)}
                        title="Password"
                    />
                    <h5>Enter your current password...</h5>
                </InputContainer>
                <InputContainer>
                    <Input
                        value={newPassword}
                        type="password"
                        onChange={value => this.changeField('newPassword', value)}
                        title="New password"
                        notValid={errorField === 'repeat'}
                    />
                    <h5>Create a strong new password to avoid trolls taking over your team ...</h5>
                </InputContainer>
                <InputContainer>
                    <Input
                        value={confirmPassword}
                        type="password"
                        onChange={value => this.changeField('confirmPassword', value)}
                        title="Confirm password"
                        notValid={errorField === 'repeat'}
                    />
                    <h5>... and confirm!</h5>
                </InputContainer>
                <ErrorBox>
                    {errorMessage}
                </ErrorBox>
                <ButtonContainer>
                    {(isSaved) ?
                        <Saved>
                            <SavedIcon />
                            Saved!
                        </Saved>
                        :
                        <Button
                            onClick={this.onSave}
                            text="Save"
                            type="primary"
                        />
                    }
                </ButtonContainer>
            </Container>
        );
    }
}
