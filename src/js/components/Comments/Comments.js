// @flow
import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import CommentBox from './CommentBox';
import Comment from './Comment';
import NoComments from './NoComments';

const Container = styled.section`
    height: 100%;
    width: 100%;
    max-width: 400px;
    border: 1px solid ${colors.lightGrey};
    position: relative;
`;

const CommentsPanel = styled.div`
    padding: 16px 16px 4px;
    background: ${colors.white};
`;

const CommentsInput = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
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
