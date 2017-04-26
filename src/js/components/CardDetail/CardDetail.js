
// @flow
import React from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'zen-editor';
import TopBar from './TopBar';
import Comments from '../Comments';
import wrapper from './CardDetailWrapper';
import { Container, ContainerInner, Main, EditorContainer } from './styles';

type Props = {
    cardId: ?string,
    showComments: bool,
    editorState: EditorState,
    isLoading: bool,
    goBack: Function,
    onSave: Function,
    collectionId: string,
    labels: Array<string>,
    changeCardLabel: Function,
    comments: Array<Object>,
    createComment: Function,
    onChange: (editorState: EditorState) => void,
    showEdit: bool,
    onEdit: () => void,
    onShowComments: () => void,
    addFile: (file: Object) => void
}

const CardDetail = ({ ...props }:Props) => {
    const {
        goBack,
        onSave,
        collectionId,
        changeCardLabel,
        labels,
        comments,
        createComment,
        editorState,
        onChange,
        showEdit,
        showComments,
        onEdit,
        onShowComments,
        addFile
    } = props;

    return (
        <Container>
            <TopBar
                onClose={goBack}
                onSave={onSave}
                showEdit={showEdit}
                onEdit={onEdit}
                showComments={onShowComments}
                collectionId={collectionId}
                changeCardLabel={changeCardLabel}
                labels={labels}
            />
            <ContainerInner>
                <Main>
                    <EditorContainer>
                        <Editor
                            readOnly={!showEdit}
                            editorState={editorState}
                            onChange={onChange}
                            addFile={addFile}
                        />
                    </EditorContainer>
                    {showComments &&
                        <Comments
                            comments={comments}
                            create={createComment}
                        />
                    }
                </Main>
            </ContainerInner>
        </Container>
    );
};

export default wrapper(CardDetail);
