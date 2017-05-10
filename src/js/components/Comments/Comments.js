// @flow
import React from 'react';
import { EditorState } from 'draft-js';
import styled from 'styled-components';
import colors from '../../styles/colors';
import CommentBox from './CommentBox';
import Comment from './Comment';
import NoComments from './NoComments';
import FailedComment from './FailedComment';

const Container = styled.section`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    min-width: 1px;
    max-width: 350px;
    height: calc(100vh - 60px);
    border-left: 1px solid ${colors.lightGrey};
    background-color: ${colors.white};
    z-index: 999999999999;
`;

const CommentsPanel = styled.div`
    padding: 16px 16px 4px;
    background: ${colors.white};
    flex: 1 1 auto;
    overflow-y: auto;
    ${''/* display: flex;
    flex-direction: column-reverse; */}
`;

const Comments = styled.div`
    height: 100%;
    ${''/* min-height: 400px; */}
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const CommentsInput = styled.div`
    width: 100%;
    ${''/* position: absolute;
    bottom: 0; */}
`;

type Props = {
    comments: Array<Object>,
    create: Function,
    failedComment: ?EditorState,
    creator: ?{
        name: string,
        username: string,
        avatar: ?{
            urlThumb64: string
        },
        gravatar: ?string
    }
}

export default ({ comments, create, failedComment, creator }:Props) => {
    return (
        <Container>
            <CommentsPanel>
                <Comments className="comments-panel">
                    {(() => {
                        if (comments.length > 0) {
                            return comments.map(comment => (
                                <Comment
                                    key={comment.id}
                                    {...comment}
                                />
                            ));
                        }
                        return <NoComments />;
                    })()}
                    {failedComment && creator &&
                        <FailedComment
                            failedComment={failedComment}
                            creator={creator}
                            onResend={create}
                        />
                    }
                </Comments>
            </CommentsPanel>
            <CommentsInput>
                <CommentBox
                    createComment={create}
                    creator={creator}
                />
            </CommentsInput>
        </Container>
    );
};
