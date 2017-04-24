// @flow
import React, { Component } from 'react';
import { convertToRaw, EditorState, convertFromRaw } from 'draft-js';
import { parseComments } from '../../utils/editor';

type Data = {
    refetch: Function,
    loading: bool,
    seed: {
        id: string,
        content: ?string,
        labels: Array<Object>,
        comments: Array<Object>
    }
}

type Props = {
    create: Function,
    update: Function,
    addLabel: Function,
    removeLabel: Function,
    params: Object,
    data?: Data,
    router: Object,
    createComment: Function
}

type State = {
    cardId: ?string,
    collectionId: string,
    isLoading: bool,
    showComments: bool,
    editorState: EditorState,
    labels: Array<string>,
    comments: Array<Object>,
    message: ?string,
    showEdit: bool,
    name: string
}

type DefaultProps = {}

export default (CardDetail:Function) => {
    return (
        class Wrapper extends Component<DefaultProps, Props, State> {
            static defaultProps: DefaultProps;
            state: State;
            constructor(props:Props) {
                super(props);
                this.state = {
                    cardId: props.params.cardId,
                    collectionId: props.params.collectionId,
                    showComments: !!props.params.comments,
                    showEdit: !props.params.cardId,
                    isLoading: false,
                    editorState: EditorState.createEmpty(),
                    labels: [],
                    comments: [],
                    message: null,
                    name: ''
                };
            }
            componentWillReceiveProps(nextProps:Props) {
                const { data } = nextProps;
                if (!data) return;
                if (data.loading) {
                    this.setState({ isLoading: true });
                    return;
                }
                const { seed } = data;
                if (seed.content) {
                    // create editorstate based on content (string)
                    let content;
                    try {
                        content = JSON.parse(seed.content);
                    } catch (e) {
                        content = null;
                    }
                    if (content !== null && typeof content === 'object') {
                        const state = convertFromRaw(content);
                        this.setState({ editorState: EditorState.createWithContent(state) });
                    }
                }
                if (seed.comments) {
                    const comments = parseComments(seed.comments)
                    this.setState({ comments });
                }

                this.setState({
                    isLoading: false,
                    labels: seed.labels.map(label => label.id)
                });
            }
            onSave = () => {
                const { cardId, collectionId, editorState, name } = this.state;
                const { create, update, data } = this.props;
                const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
                // existing cards has a cardId
                if (cardId) {
                    update(cardId, content)
                    .then(() => data && data.refetch())
                    .catch(err => console.log(err));
                    return;
                }
                create(collectionId, name, content)
                    .then(() => data && data.refetch())
                    .catch(err => console.log(err));
            }
            changeCardLabel = (labelId:string) => {
                const { create, removeLabel, addLabel } = this.props;
                const { cardId, collectionId, labels, name } = this.state;
                if (!cardId) {
                    create(collectionId, name)
                        .then((res) => {
                            const id = res.data.createSeed.id;
                            this.setState({ cardId: id });
                            this.changeCardLabel(labelId);
                        })
                        .catch(err => console.log(err));
                    return;
                }
                const labelExist = labels.findIndex(id => id === labelId) > -1;
                if (labelExist) {
                    removeLabel(cardId, labelId)
                        .then((res) => {
                            if (res.data.removeSeedLabel) {
                                this.setState({ labels: labels.filter(id => id !== labelId) });
                            }
                        })
                        .catch(err => console.log(err));
                } else {
                    addLabel(cardId, labelId)
                        .then((res) => {
                            if (res.data.addSeedLabel) {
                                labels.push(labelId);
                                this.setState({ labels });
                            }
                        })
                        .catch(err => console.log(err));
                }
            }
            createComment = (editorState:EditorState) => {
                const { cardId, collectionId, name, comments } = this.state;
                const { createComment, create } = this.props;
                const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
                if (!cardId) {
                    create(collectionId, name)
                        .then((res) => {
                            const id = res.data.createSeed.id;
                            this.setState({ cardId: id });
                            this.createComment(editorState);
                        })
                        .catch(err => console.log(err));
                    return;
                }
                createComment(cardId, content)
                    .then((res) => {
                        let comment = res.data.createComment;
                        comment = parseComments([comment])[0];
                        comments.push(comment);
                        this.setState({ comments });
                    })
                    .catch(err => console.log(err));
            }
            onChange = (editorState:EditorState) => this.setState({ editorState })
            render() {
                const { router } = this.props;
                return (
                    <CardDetail
                        onSave={this.onSave}
                        changeCardLabel={this.changeCardLabel}
                        goBack={() => router.goBack()}
                        createComment={this.createComment}
                        onChange={this.onChange}
                        onEdit={() => this.setState({ showEdit: !this.state.showEdit })}
                        onShowComments={() => this.setState({ showComments: !this.state.showComments })}
                        {...this.state}
                    />
                );
            }
        }
    );
};
