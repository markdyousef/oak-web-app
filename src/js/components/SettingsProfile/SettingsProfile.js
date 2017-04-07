import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import ProfilePic from '../../components/ProfilePic';
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

export default class SettingsProfile extends Component {
    static propTypes = {
        data: PropTypes.shape({
            loading: PropTypes.bool,
            me: PropTypes.object
        }).isRequired,
        updateUser: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            errorMessage: null,
            avatar: {},
            isSaved: false
        };
    }
    componentWillReceiveProps(nextProps) {
        const { data } = nextProps;

        if (data.loading) return;
        const { name, username, avatar } = data.me;

        const picture = (avatar.urlThumb512) ?
            { id: avatar.id, url: avatar.urlThumb512 }
            : null;

        this.setState({
            name,
            username,
            avatar: picture
        });
    }
    onSave = () => {
        const { updateUser } = this.props;
        const { name, username, avatar } = this.state;

        const avatarId = (avatar.id) ? avatar.id : null;

        updateUser(name, username, avatarId)
            .then(res => this.setState({ isSaved: true }))
            .catch(err => console.log(err));
    }
    changeField = (key, value) => {
        switch (key) {
        case 'name':
            this.setState({ name: value });
            break;
        case 'username':
            this.setState({ username: value });
            break;
        case 'avatar':
            this.setState({ avatar: value });
            break;
        default:
            break;
        }
        this.setState({ isSaved: false, errorMessage: false });
    }
    render() {
        const { name, username, avatar, errorMessage, isSaved } = this.state;
        return (
            <Container>
                <h1>Profile</h1>
                <ProfilePic
                    picture={avatar.url}
                    onChange={this.changeField}
                />
                <InputContainer>
                    <Input
                        value={name}
                        placeholder="John Doe"
                        onChange={value => this.changeField('name', value)}
                        title="Full Name"
                    />
                    <h5>Your name goes whereever you go on Cuest, and
                        will help new teammates get to know you.
                    </h5>
                </InputContainer>
                <InputContainer>
                    <Input
                        value={username}
                        placeholder="john"
                        onChange={value => this.changeField('username', value)}
                        title="Username"
                    />
                    <h5>Here's how you're username looks: <span>@{username}</span>
                    </h5>
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
