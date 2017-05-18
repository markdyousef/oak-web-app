// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import ProfilePic from '../../components/ProfilePic';
import Input from '../shared/Input';
import { SquareButton } from '../shared/Button';
import SavedIcon from '../../icons/saved';

const Container = styled.section`
    width: 100%;
    height: 100%;
    & h1 {
        margin-bottom: 16px;
    }
    & h5 {
        margin: 8px 0;
        font-size: 12px;
        color: ${colors.grey}
        text-transform: uppercase;
    }
    & span {
        font-weight: bold;
    }
    & p {
        font-size: 14px;
        line-height: 17px;
        color: ${colors.grey}
        margin-top: 8px;
    }
    & label {
        font-size: 14px;
        line-height: 17px;
        color: ${colors.grey}
        margin-bottom: 8px;
    }
`;

const InputContainer = styled.div`
    margin-top: 24px;
`;

const ErrorBox = styled.div`
    color: ${colors.red}
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
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

type DefaultProps = {};

type Props = {
    updateUser: (name: string, username: string, avatarId: ?string) => Object,
    data: {
        loading: bool,
        me: ?{
            id: string,
            name: string,
            username: string,
            gravatar: ?string,
            avatar: ?{
                id: string,
                urlThumb256: string
            }
        }
    }
};

type State = {
    name: string,
    username: string,
    errorMessage: ?string,
    avatar: ?{
        url: string,
        id: ?string
    },
    isSaved: bool
};

export default class SettingsProfile extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps;
    state: State;
    constructor(props:Props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            errorMessage: null,
            avatar: null,
            isSaved: false
        };
    }
    componentWillReceiveProps(nextProps:Props) {
        const { data } = nextProps;

        if (data.loading || !data.me) return;
        const { name, username, avatar, gravatar } = data.me;
        let picture;
        // avatar overrules gravatar
        if (gravatar) picture = { url: gravatar, id: null };
        if (avatar && avatar.urlThumb256) {
            picture = { id: avatar.id, url: avatar.urlThumb256 };
        }

        this.setState({
            name,
            username,
            avatar: picture
        });
    }
    onSave = () => {
        const { updateUser } = this.props;
        const { name, username, avatar } = this.state;

        console.log(avatar);
        const avatarId = (avatar && avatar.id) ? avatar.id : null;
        console.log(avatarId);
        updateUser(name, username, avatarId)
            .then(res => this.setState({ isSaved: true }))
            .catch(err => console.log(err));
    }
    changeField = (key: string, value: string | Object) => {
        console.log(value)
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
        this.setState({ isSaved: false, errorMessage: null });
    }
    render() {
        const { name, username, avatar, errorMessage, isSaved } = this.state;
        return (
            <Container>
                <h1>Profile</h1>
                <ProfilePic
                    picture={avatar && avatar.url}
                    onChange={this.changeField}
                />
                <InputContainer>
                    <Input
                        value={name}
                        placeholder="John Doe"
                        onChange={value => this.changeField('name', value)}
                        title="Full name"
                    />
                    <p>Your name goes whereever you go on Cuest, and
                        will help new teammates get to know you.
                    </p>
                </InputContainer>
                <InputContainer>
                    <Input
                        value={username}
                        placeholder="john"
                        onChange={value => this.changeField('username', value)}
                        title="Username"
                    />
                    <p>Here's how your username looks: <span>@{username}</span>
                    </p>
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
                        <SquareButton
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
