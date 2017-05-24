// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
    margin-top: 60px;
    border-left: 1px solid ${colors.lightGrey};
    background-color: ${colors.white};
    z-index: 4001;
`;

const CommentsPanel = styled.div`
    padding: 50px 16px 4px;
    background: ${colors.white};
    flex: 1 1 auto;
    position: relative;
    ${''/* display: flex;
    flex-direction: column-reverse; */}
`;

const CommentsTitle = styled.div` {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: #fafafa;
    padding: 16px 20px;
    font-size: 16px;
    font-weight: bold;
    color: #131517;
    border-bottom: 1px solid #e5e5e5;
    z-index: 4005;
    & span {
        font-size: 38px;
        position: absolute;
        right: 20px;
        top: 6px;
        font-weight: 100;
        cursor: pointer;
    }
`;

const CommentsContainer = styled.div`
    position: absolute;
    bottom: 8px;
    overflow-y: auto;
    width: 100%;
    left: 0;
    right: 0;
    top: 49px;
`;

const Comments = styled.div`
    min-height: calc(100vh - 196px);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;


const CommentsInput = styled.div`
    width: 100%;
    ${''/* position: absolute;
    bottom: 0; */}
`;

type DefaultProps = {};

type Props = {
    comments: Array<Object>,
    create: Function,
    failedComment: ?EditorState,
    onCloseComments: () => void,
    creator: ?{
        name: string,
        username: string,
        avatar: ?{
            urlThumb64: string
        },
        gravatar: ?string
    }
}

type State = {};

export default class extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps = {};
    state: State;
    props: Props;
    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }
    scrollToBottom = () => {
        const node = ReactDOM.findDOMNode(this.commentsEnd);
        node.scrollIntoView({ behavior: 'smooth'});
    }
    render() {
        const { comments, create, failedComment, creator, onCloseComments } = this.props;
        return (
            <Container>
                <CommentsPanel>
                <CommentsTitle>
                    Comments
                    <span onClick={onCloseComments}>&times;</span>
                </CommentsTitle>
                    <CommentsContainer>
                        <Comments>
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
                        <div
                            style={{ float: 'left', clear: 'both'}}
                            ref={(element) => { this.commentsEnd = element}}
                        />
                    </CommentsContainer>
                </CommentsPanel>
                <CommentsInput>
                    <CommentBox
                        createComment={create}
                        creator={creator}
                    />
                </CommentsInput>
            </Container>
        );
    }
}
