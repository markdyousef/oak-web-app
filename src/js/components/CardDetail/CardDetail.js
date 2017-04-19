
// @flow
import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'zen-editor';
import TopBar from './TopBar';
import Comments from '../../containers/CommentsContainer';
import wrapper from './CardDetailWrapper';
import { Container, Main, CommentsContainer, EditorContainer } from './styles';

type Props = {
    cardId: ?string,
    showComments: bool,
    editorState: EditorState,
    isLoading: bool,
    goBack: Function,
    onSave: Function,
    collectionId: string,
    labels: Array<Object>,
    changeCardLabel: Function
}

type State = {
    showEdit: bool,
    showComments: bool,
    editorState: EditorState,
    isLoading: bool
}

type DefaultProps = {}

class CardDetail extends Component<DefaultProps, Props, State> {
    static defaultProps = {};
    state: State;
    constructor(props:Props) {
        super(props);
        this.state = {
            showEdit: !props.cardId,
            message: null,
            showComments: props.showComments,
            editorState: props.editorState,
            isLoading: props.isLoading
        };
    }
    onChange = (editorState:EditorState) => this.setState({ editorState });
    // TODO: fix this
    // renderComments = () => {
    //     const { showComments } = this.state;
    //
    //     if (!showComments) return null;
    //
    //     return (
    //         <CommentsContainer>
    //             <Comments cardId={this.cardId} />
    //         </CommentsContainer>
    //     );
    // }
    render() {
        const { showEdit, editorState, showComments } = this.state;
        const { goBack, onSave, collectionId, changeCardLabel, labels } = this.props;
        return (
            <Container>
                <TopBar
                    onClose={goBack}
                    onSave={() => onSave(editorState)}
                    showEdit={showEdit}
                    onEdit={() => this.setState({ showEdit: true })}
                    showComments={() => this.setState({ showComments: !showComments })}
                    collectionId={collectionId}
                    changeCardLabel={changeCardLabel}
                    labels={labels}
                />
                <Main>
                    <EditorContainer>
                        <Editor
                            canEdit={showEdit}
                            editorState={editorState}
                            onChange={this.onChange}
                        />
                    </EditorContainer>
                    {/* {this.renderComments()} */}
                </Main>
            </Container>
        );
    }
}

export default wrapper(CardDetail);
