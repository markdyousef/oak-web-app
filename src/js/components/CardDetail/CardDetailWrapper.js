// @flow
import React, { Component } from 'react';
import { convertToRaw, EditorState, convertFromRaw } from 'draft-js';

type Data = {
    loading: bool,
    seed: {
        id: string,
        content: ?string,
        labels: Array<Object>
    }
}

type Props = {
    create: Function,
    update: Function,
    addLabel: Function,
    removeLabel: Function,
    params: Object,
    data: ?Data,
    router: Object
}

type State = {
    cardId: ?string,
    collectionId: string,
    isLoading: bool,
    showComments: bool,
    content: EditorState,
    labels: Array<Object>
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
                    labels: []
                };
            }
            componentWillReceiveProps(nextProps:Props) {
                const { data } = nextProps;
                if (!data) return;
                if (data.loading) {
                    this.setState({ isLoading: true });
                    return;
                }
                // create editorstate based on content (string)
                const content = JSON.parse(data.seed.content);
                if (content !== null && typeof content === 'object') {
                    const state = convertFromRaw(content);
                    this.setState({ content: EditorState.createWithContent(state) });
                }
                this.setState({ isLoading: false, labels: data.seed.labels });
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
                const { create } = this.props;
                const { cardId, collectionId } = this.state;
                // if there is no cardId create card and save
                // TODO: waiting for new seed mutation with title
                // if (!cardId) {
                //     create(collectionId)
                //         .then((res) => {
                //             console.log(res);
                //             // this.setState({ cardId: })
                //         })
                //         .catch(err => console.log(err));
                // }
                //     const { addLabel, removeLabel } = this.props;
                //     const { cardLabels } = this.state;
                //
                //     const labelExist = cardLabels.findIndex(labelId => labelId === id) > -1;
                //     if (labelExist) {
                //         removeLabel(id)
                //             .then((res) => {
                //                 if (res.data.removeSeedLabel) {
                //                     const labels = cardLabels.filter(labelId => labelId !== id);
                //                     this.setState({ cardLabels: labels });
                //                 }
                //             })
                //             .catch(err => console.log(err));
                //     } else {
                //         addLabel(id)
                //             .then((res) => {
                //                 if (res.data.addSeedLabel) {
                //                     cardLabels.push(id);
                //                     this.setState({ cardLabels });
                //                 }
                //             })
                //             .catch(err => console.log(err));
                //     }
            }
            render() {
                const { cardId, isLoading, showComments, content, collectionId, labels } = this.state;
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
                    />
                );
            }
        }
    );
};
