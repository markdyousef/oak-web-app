// @flow
import React, { Component } from 'react';
import { decorator } from 'zen-editor';
import { convertToRaw, EditorState, convertFromRaw } from 'draft-js';
import { parseComments, uploadImage, changeUrls } from '../../utils';
import type { DefaultProps, State, Props } from './types';

export default (CardDetail:Function) => {
    return (
        class Wrapper extends Component<DefaultProps, Props, State> {
            static defaultProps: DefaultProps;
            state: State;
            constructor(props:Props) {
                super(props);
                this.state = {
                    showComments: !!props.params.comments,
                    showEdit: !props.params.cardId,
                    isLoading: false,
                    editorState: EditorState.createEmpty(decorator),
                    labels: [],
                    comments: [],
                    images: [],
                    message: null,
                    name: '',
                    failedComment: null,
                    creator: null
                };
            }
            componentWillMount() {
                const { params, updateCard } = this.props;
                if (params.collectionId) {
                    updateCard({
                        key: 'collectionId',
                        value: params.collectionId
                    });
                    if (params.cardId) {
                        updateCard({
                            key: 'cardId',
                            value: params.cardId
                        });
                    }
                }
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
                        this.setState({ editorState: EditorState.createWithContent(state, decorator) });
                    }
                }
                if (seed.comments) {
                    const comments = parseComments(seed.comments);
                    this.setState({ comments });
                }

                this.setState({
                    isLoading: false,
                    labels: seed.labels.map(label => label.id),
                    creator: data.me
                });
            }
            onSave = () => {
                const { editorState, name, images } = this.state;
                const { create, update, data, updateCard, card } = this.props;
                const cardId = card.get('cardId');
                const collectionId = card.get('collectionId');
                const newEditorState = changeUrls(editorState, images);
                const content = JSON.stringify(convertToRaw(newEditorState.getCurrentContent()));
                const cover = images[0] && images[0].id;
                // existing cards has a cardId
                this.setState({ isLoading: true });
                if (cardId) {
                    update(cardId, content, cover)
                    .then(() => {
                        if (data) data.refetch();
                        this.setState({ isLoading: false, message: null });
                        updateCard({ key: 'shouldUpdate', value: true });
                    })
                    .catch(() => {
                        const message = {
                            type: 'error',
                            message: "We couldn't update your card",
                            onClick: this.onSave
                        };
                        this.setState({ message, isLoading: false });
                    });
                } else {
                    create(collectionId, name, content, cover)
                        .then(() => {
                            this.setState({ isLoading: false, message: null });
                            if (data) data.refetch();
                            updateCard({ key: 'shouldUpdate', value: true });
                        })
                        .catch(() => {
                            const message = {
                                type: 'error',
                                message: "We couldn't create your card",
                                onSave: this.onSave
                            };
                            this.setState({ message, isLoading: false });
                        });
                }
            }
            changeCardLabel = (labelId:string) => {
                const { create, removeLabel, addLabel, updateCard, card } = this.props;
                const cardId = card.get('cardId');
                const collectionId = card.get('collectionId');
                const { labels, name } = this.state;
                if (!cardId) {
                    create(collectionId, name)
                        .then((res) => {
                            const id = res.data.createSeed.id;
                            this.setState({ cardId: id, message: null });
                            this.changeCardLabel(labelId);
                        })
                        .catch(() => {
                            const message = {
                                type: 'error',
                                message: "We couldn't create your label",
                                onSave: () => this.changeCardLabel(labelId)
                            };
                            this.setState({ message });
                        });
                    return;
                }
                const labelExist = labels.findIndex(id => id === labelId) > -1;
                if (labelExist) {
                    removeLabel(cardId, labelId)
                        .then((res) => {
                            if (res.data.removeSeedLabel) {
                                this.setState({ labels: labels.filter(id => id !== labelId) });
                            }
                            updateCard({ key: 'shouldUpdate', value: true });
                        })
                        .catch(() => {
                            const message = {
                                type: 'error',
                                message: "We couldn't remove your label",
                                onSave: () => this.changeCardLabel(labelId)
                            };
                            this.setState({ message });
                        });
                } else {
                    addLabel(cardId, labelId)
                        .then((res) => {
                            if (res.data.addSeedLabel) {
                                labels.push(labelId);
                                this.setState({ labels });
                            }
                            updateCard({ key: 'shouldUpdate', value: true });
                        })
                        .catch(() => {
                            const message = {
                                type: 'error',
                                message: "We couldn't add your label",
                                onSave: () => this.changeCardLabel(labelId)
                            };
                            this.setState({ message });
                        });
                }
            }
            createComment = (editorState:EditorState) => {
                const { name, comments } = this.state;
                const { createComment, create, updateCard, card } = this.props;
                const cardId = card.get('cardId');
                const collectionId = card.get('collectionId');
                const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
                if (!cardId) {
                    create(collectionId, name)
                        .then((res) => {
                            const id = res.data.createSeed.id;
                            this.setState({ cardId: id, failedComment: null });
                            this.createComment(editorState);
                        })
                        .catch(() => this.setState({ failedComment: editorState }));
                    return;
                }
                createComment(cardId, content)
                    .then((res) => {
                        let comment = res.data.createComment;
                        comment = parseComments([comment])[0];
                        comments.push(comment);
                        this.setState({ comments, failedComment: null });
                        updateCard(true);
                    })
                    .catch(() => this.setState({ failedComment: editorState }));
            }
            addFile = (file: Object) => {
                const { images } = this.state;
                // TODO: add loading state
                uploadImage(file)
                    .then((res) => {
                        images.push({ ...res, name: file.name });
                        this.setState({ images });
                    })
                    .catch(() => {
                        const message = {
                            type: 'error',
                            message: "File couldn't be added",
                            onClick: () => this.addFile(file)
                        };
                        this.setState({ message });
                    });
            }
            onChange = (editorState:EditorState) => this.setState({ editorState })
            render() {
                const { router, card } = this.props;
                return (
                    <CardDetail
                        onSave={this.onSave}
                        changeCardLabel={this.changeCardLabel}
                        goBack={() => router.goBack()}
                        createComment={this.createComment}
                        onChange={this.onChange}
                        addFile={this.addFile}
                        onEdit={() => this.setState({ showEdit: !this.state.showEdit })}
                        onShowComments={() => this.setState({ showComments: !this.state.showComments })}
                        onCloseError={() => this.setState({ message: null })}
                        existingCard={!!card.get('cardId')}
                        {...this.state}
                    />
                );
            }
        }
    );
};
