// @flow
import React from 'react';
import { EditorState } from 'draft-js';
// TODO: change back to distributed npm package
// import { Editor } from 'zen-editor';
import Editor from '../Editor/src/components/Editor';

import TopBar from './TopBar';
import Comments from '../../containers/CommentsContainer';
import { Container, ContainerInner, Main, EditorContainer } from './styles';
import Toast from '../shared/Toast';

type Props = {
    cardId: ?string,
    showComments: bool,
    editorState: EditorState,
    isLoading: bool,
    existingCard: bool,
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
    addFile: (file: Object) => void,
    isLoading: bool,
    failedComment: ?EditorState,
    creator: ?{
        name: string,
        username: string,
        avatar: Object,
        gravatar: string
    },
    message: ?{
        type: string,
        message: string,
        onClick: Function
    },
    onCloseError: Function
}

const CardDetail = ({ ...props }:Props) => {
    const {
        goBack,
        onSave,
        collectionId,
        changeCardLabel,
        labels,
        editorState,
        onChange,
        showEdit,
        showComments,
        onEdit,
        onShowComments,
        addFile,
        isLoading,
        message,
        onCloseError,
        existingCard
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
                isLoading={isLoading}
                existingCard={existingCard}
            />
            {message && <Toast
                message={message}
                onClose={onCloseError}
            />}
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
                        <Comments />
                    }
                </Main>
            </ContainerInner>
        </Container>
    );
};

export default CardDetail;
