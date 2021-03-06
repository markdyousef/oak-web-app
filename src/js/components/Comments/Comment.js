// @flow
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { EditorState, Editor } from 'draft-js';
import colors from '../../styles/colors';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 8px 20px;
    &:hover {
        background: #F9F9F9;
    }
`;

const Profile = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 999em;
    margin-right: 8px;
`;

const MessageContainer = styled.div`
    width: calc(100% - 43px);
    & span {
        font-size: 15px;
        color: ${colors.black};
        line-height: 1.25;
        font-weight: normal;
        margin-left: -0.5px;
    }
`;

const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    & h3 {
        font-size: 15px;
        font-weight: bold;
        color: #131517;
        margin-right: 5px;
    }
    & a {
        font-size: 14px;
        font-weight: normal;
        color: #797C80;
        margin-right: 5px;
    }
    & h5 {
        font-size: 12px;
        font-weight: normal;
        color: #797C80;
    }
`;

type Props = {
    createdAt?: string,
    text: EditorState,
    creator: {
        name: string,
        username: string,
        avatar: ?{
            urlThumb64: string
        },
        gravatar: ?string
    }
}

export default ({ createdAt, text, creator }: Props) => {
    const { name, username, avatar, gravatar } = creator;
    let picture;
    // custom avatar overrules gravatar
    if (gravatar) picture = gravatar;
    if (avatar && avatar.urlThumb64) picture = avatar.urlThumb64;
    return (
        <Container>
            <Profile src={picture} />
            <MessageContainer>
                <Header>
                    <h3>{name}</h3>
                { /* <a>{username}</a> */ }
                    <h5>{moment(createdAt).fromNow()}</h5>
                </Header>
                <Editor
                    editorState={text}
                    readOnly
                    onChange={() => {}}
                />
            </MessageContainer>
        </Container>
    );
};
