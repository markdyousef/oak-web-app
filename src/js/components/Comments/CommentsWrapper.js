// @flow
import React, { Component } from 'react';
import { convertToRaw } from 'draft-js';
import type { EditorState } from 'draft-js';
import { parseComments } from '../../utils';

type DefaultProps = {};

type Props = {
    cardId: ?string,
    comments: Object,
    updateComments: Function,
    createComment: Function,
    data: {
        loading: bool,
        seed?: {
            comments: ?Array<Object>
        }
    },
};

type State = {
    comments: Array<Object>,
    failedComment: ?Object,
    receivedComments: bool
};

export default (Comments:Function) => {
    return (
        class Wrapper extends Component<DefaultProps, Props, State> {
            static defaultProps: DefaultProps;
            state: State;
            props: Props;
            constructor() {
                super();
                this.state = {
                    comments: [],
                    failedComment: null,
                    receivedComments: false
                };
            }
            componentWillReceiveProps(nextProps: Props) {
                const { data: { seed, loading }, comments } = nextProps;
                const { receivedComments } = this.state;
                if (loading || !seed) return;
                if (seed && seed.comments && !receivedComments) {
                    this.setState({
                        comments: parseComments(seed.comments),
                        receivedComments: true
                    });
                }
                if (comments.get('failedComment')) {
                    this.setState({
                        failedComment: comments.get('failedComment').toJS()
                    });
                }
            }
            createComment = (editorState:EditorState) => {
                const { comments } = this.state;
                const { createComment, cardId, updateComments, data } = this.props;
                const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
                if (cardId) {
                    createComment(cardId, content)
                        .then((res) => {
                            let comment = res.data.createComment;
                            comment = parseComments([comment])[0];
                            comments.push(comment);
                            this.setState({ comments });
                            updateComments({
                                key: 'failedComment',
                                value: null
                            });
                            updateComments({
                                key: 'shouldUpdate',
                                value: true
                            });
                        })
                        .catch(() => updateComments({
                            key: 'failedComment',
                            value: editorState
                        }));
                }
            }
            render() {
                const { comments, failedComment } = this.state;
                return (
                    <Comments
                        comments={comments}
                        failedComment={failedComment}
                        creator={{}}
                        create={this.createComment}
                    />
                );
            }
        }
    );
};
