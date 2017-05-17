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
                return new Promise ((resolve, reject) => {
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
                })

            }
            downloadFile = () => {

            }
            onChange = (editorState:EditorState) => this.updateCard('editorState', editorState)
            render() {
                const { router, card, comments, showLabels } = this.props;
                return (
                    <CardDetail
                        onChange={this.onChange}
                        addFile={this.addFile}
                        onCloseError={() => this.updateCard('message', { type: 'error', message: 'close'})}
                        existingCard={!!card.get('cardId')}
                        showComments={comments.get('showComments')}
                        collectionId={card.get('collectionId')}
                        showLabels={showLabels}
                        onShowLabels={this.onShowLabels}
                        changeName={name => this.updateCard('name', name)}
                        editorState={card.get('editorState')}
                        readOnly={card.get('readOnly')}
                    />
                );
            }
        }
    );
};
