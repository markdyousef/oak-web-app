// @flow
import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { is } from 'immutable';
import { uploadImage } from '../../utils';
import type { DefaultProps, State, Props } from './types';
import CardLoading from './CardLoading';

export default (CardDetail:Function) => {
    return (
        class Wrapper extends Component<DefaultProps, Props, State> {
            static defaultProps: DefaultProps;
            state: State;
            props: Props;
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
            componentWillReceiveProps(nextProps: Props) {
                const { loading } = nextProps;
                if (loading) {
                    this.updateCard('isLoading', true);
                } else {
                    this.updateCard('isLoading', false);
                }
            }
            componentWillUnmount() {
                const { clearCard } = this.props;
                clearCard();
            }
            updateCard = (key: string, value: any) => this.props.updateCard({ key, value })
            onShowLabels = (show?:bool) =>
                this.props.updateLabels({
                    key: 'showLabels',
                    value: show
                })
            addFile = (file: Object, type?: string) => {
                const { addImage } = this.props;
                return new Promise((resolve, reject) => {
                    if (!type || type === 'image') {
                        uploadImage(file)
                            .then((res) => {
                                const image = { ...res, type: 'image', file };
                                addImage(image);
                                resolve(image);
                            })
                            .catch(() => {
                                const message = {
                                    type: 'error',
                                    message: "File couldn't be added",
                                    onClick: () => this.addFile(file)
                                };
                                this.setState({ message });
                                reject(message);
                            });
                    }
                });
            }
            onChange = (editorState:EditorState) => {
                const { card } = this.props;
                // check if card has been edited
                const content = card.get('editorState').getCurrentContent();
                const isEqual = is(editorState.getCurrentContent(), content);
                if (!isEqual) this.updateCard('isEdited', true);

                this.updateCard('editorState', editorState);
            }
            render() {
                const { card, comments, showLabels, isLoading, seed } = this.props;

                // loading state
                if (isLoading) return <CardLoading />;


                return (
                    <CardDetail
                        onChange={this.onChange}
                        addFile={this.addFile}
                        onCloseError={() => this.updateCard('message', { type: 'error', message: 'close' })}
                        existingCard={card.get('cardId')}
                        showComments={comments.get('showComments')}
                        collectionId={card.get('collectionId')}
                        showLabels={showLabels}
                        onShowLabels={this.onShowLabels}
                        changeName={name => this.updateCard('name', name)}
                        editorState={card.get('editorState')}
                        readOnly={card.get('readOnly')}
                        creator={seed && seed.creator}
                    />
                );
            }
        }
    );
};
