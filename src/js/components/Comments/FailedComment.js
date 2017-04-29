// @flow
import React from 'react';
import { EditorState } from 'draft-js';
import styled from 'styled-components';
import { colors } from '../../styles';
import Comment from './Comment';

const Container = styled.div`
    padding-bottom: 20px;
`;

const Wrapper = styled.div`
    opacity: 0.25;
`;

const Send = styled.div`
    display: block;
    margin-left: 45px;
    & h5 {
        font-size: 14px;
        color: ${colors.black}
    }
    & button {
        font-weight: bold;
        color: ${colors.green};
        padding: 0;
        border: none;
        background-color: #fff;
        font-size: 14px;
        cursor: pointer;
    }
`;

type Props = {
    failedComment: EditorState,
    creator: {
        name: string,
        username: string,
        avatar: ?{
            urlThumb64: string
        },
        gravatar: ?string
    }

}

export default ({ failedComment, creator, onResend }:Props) => {
    const editorState = EditorState.createWithContent(failedComment.getCurrentContent());
    return (
        <Container>
            <Wrapper>
                <Comment
                    text={editorState}
                    creator={creator}
                />
            </Wrapper>
            <Send>
                <h5>You're message didn't get send</h5>
                <button onClick={onResend}>Send it again</button>
            </Send>
        </Container>
    );
};
