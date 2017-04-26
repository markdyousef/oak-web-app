// @flow
import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import CommentBox from './CommentBox';
import Comment from './Comment';
import NoComments from './NoComments';

const Container = styled.section`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    min-width: 1px;
    max-width: 350px;
    height: calc(100vh - 60px);
    border-left: 1px solid ${colors.lightGrey};
    background-color: ${colors.white}
    z-index: 999;
`;

const CommentsPanel = styled.div`
    padding: 16px 16px 4px;
    background: ${colors.white};
    height: 100%;
    min-height: 200px;
    overflow-x: auto;
`;

const CommentsInput = styled.div`
    width: 100%;
    ${''/* position: absolute;
    bottom: 0; */}
`;

type Props = {
    comments: Array<Object>,
    create: Function
}

export default ({ comments, create }:Props) => {
    return (
        <Container>
            <CommentsPanel>
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
            </CommentsPanel>
            <CommentsInput>
                <CommentBox
                    createComment={create}
                />
            </CommentsInput>
        </Container>
    );
};
