// @flow
import React, { Component } from 'react';
import { convertToRaw, EditorState, convertFromRaw } from 'draft-js';

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
    data: ?Data,
    router: Object,
    createComment: Function
}

type State = {
    cardId: ?string,
    collectionId: string,
    isLoading: bool,
    showComments: bool,
    content: EditorState,
    labels: Array<string>,
    comments: Array<Object>
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
                    isLoading: false,
                    content: EditorState.createEmpty(),
                    labels: [],
                    comments: []
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
                    const content = JSON.parse(seed.content);
                    if (content !== null && typeof content === 'object') {
                        const state = convertFromRaw(content);
                        this.setState({ content: EditorState.createWithContent(state) });
                    }
                }
                if (seed.comments) {
                    const comments = seed.comments.map((item) => {
                        try {
                            let { text } = item;
                            text = JSON.parse(text);
                            text = EditorState.createWithContent(convertFromRaw(text));
                            return { ...item, text };
                        } catch (e) {
                            return null;
                        }
                    }).filter(Boolean);
                    this.setState({ comments });
                }

                this.setState({
                    isLoading: false,
                    labels: seed.labels.map(label => label.id)
                });
            }
            onSave = (editorState: EditorState) => {
                const { cardId, collectionId } = this.state;
                const { create, update } = this.props;
                const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
                // existing cards has a cardId
                if (cardId) return update(cardId, content);
                return create(collectionId, content);
            }
            changeCardLabel = (labelId:string) => {
                const { create, removeLabel, addLabel } = this.props;
                const { cardId, collectionId, labels } = this.state;
                // if there is no cardId create card and save
                // TODO: waiting for new seed mutation with title
                // call this.changeCardLabel after saved cardId (recursive)
                if (!cardId) {
                    // create(collectionId)
                    //     .then((res) => {
                    //         console.log(res);
                    //         // this.setState({ cardId: })
                    //     })
                    //     .catch(err => console.log(err));
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
                const { cardId } = this.state;
                const { createComment, data } = this.props;
                const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
                // if there is no cardId create card and save
                // TODO: waiting for new seed mutation with title
                // call this.createComment after saved cardId (recursive)
                if (!cardId) {
                    // create(collectionId)
                    //     .then((res) => {
                    //         console.log(res);
                    //         // this.setState({ cardId: })
                    //     })
                    //     .catch(err => console.log(err));
                }
                createComment(cardId, content)
                    .then(() => data && data.refetch())
                    .catch(err => console.log(err));
            }
            render() {
                const { cardId, isLoading, showComments, content, collectionId, labels, comments } = this.state;
                const { router } = this.props;
                return (
                    <CardDetail
                        onSave={this.onSave}
                        cardId={cardId}
                        isLoading={isLoading}
                        showComments={showComments}
                        editorState={content}
                        changeCardLabel={this.changeCardLabel}
                        goBack={() => router.goBack()}
                        collectionId={collectionId}
                        labels={labels}
                        comments={comments}
                        createComment={this.createComment}
                    />
                );
            }
        }
    );
};
