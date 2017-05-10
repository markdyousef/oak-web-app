// @flow
import React, { Component } from 'react';
import { decorator } from 'zen-editor';
import { convertToRaw, EditorState, convertFromRaw } from 'draft-js';
import { uploadImage, changeUrls } from '../../utils';
import type { DefaultProps, State, Props } from './types';

export default (CardDetail:Function) => {
    return (
        class Wrapper extends Component<DefaultProps, Props, State> {
            static defaultProps: DefaultProps;
            state: State;
            constructor(props:Props) {
                super(props);
                this.state = {
                    showEdit: !props.params.cardId,
                    isLoading: false,
                    editorState: EditorState.createEmpty(decorator),
                    images: [],
                    message: null,
                    name: ''
                };
            }
            componentWillMount() {
                const { params, updateCard, updateComments } = this.props;
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
                if (params.comments) {
                    updateComments({
                        key: 'showComments',
                        value: true
                    });
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

                this.setState({
                    isLoading: false,
                    creator: data.me
                });
            }
            updateCard = (key: string, value: any) => this.props.updateCard({ key, value })
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
                        this.updateCard('shouldUpdate', true);
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
                        .then((res) => {
                            const id = res.data.createSeed.id;
                            this.setState({ isLoading: false, message: null });
                            if (data) data.refetch();
                            this.updateCard('shouldUpdate', true);
                            this.updateCard('cardId', id)
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
            onShowLabels = (show?:bool) =>
                this.props.updateLabels({
                    key: 'showLabels',
                    value: show
                })
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
                const { router, card, comments, showLabels } = this.props;
                return (
                    <CardDetail
                        onSave={this.onSave}
                        goBack={() => router.goBack()}
                        onChange={this.onChange}
                        addFile={this.addFile}
                        onEdit={() => this.setState({ showEdit: !this.state.showEdit })}
                        onShowComments={() => this.setState({ showComments: !this.state.showComments })}
                        onCloseError={() => this.setState({ message: null })}
                        existingCard={!!card.get('cardId')}
                        showComments={comments.get('showComments')}
                        collectionId={card.get('collectionId')}
                        showLabels={showLabels}
                        onShowLabels={this.onShowLabels}
                        {...this.state}
                    />
                );
            }
        }
    );
};
