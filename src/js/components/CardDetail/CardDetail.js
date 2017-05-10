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
    showComments: bool,
    editorState: EditorState,
    isLoading: bool,
    existingCard: bool,
    goBack: Function,
    onSave: Function,
    collectionId: string,
    onChange: (editorState: EditorState) => void,
    showEdit: bool,
    onEdit: () => void,
    onShowComments: () => void,
    addFile: (file: Object) => void,
    onShowLabels: (show:bool) => void,
    showLabels: bool,
    message: ?{
        type: string,
        message: string,
        onClick: Function
    },
    onCloseError: Function
}

const CardDetail = ({ ...props }:Props) => {
    return (
        <Container>
            <TopBar
                onClose={props.goBack}
                onSave={props.onSave}
                showEdit={props.showEdit}
                onEdit={props.onEdit}
                showComments={props.onShowComments}
                isLoading={props.isLoading}
                existingCard={props.existingCard}
                showLabels={props.showLabels}
                onShowLabels={props.onShowLabels}
            />
            {props.message && <Toast
                message={props.message}
                onClose={props.onCloseError}
            />}
            <ContainerInner>
                <Main>
                    <EditorContainer>
                        <Editor
                            readOnly={!props.showEdit}
                            editorState={props.editorState}
                            onChange={props.onChange}
                            addFile={props.addFile}
                            showFAB
                        />
                    </EditorContainer>
                    {props.showComments &&
                        <Comments />
                    }
                </Main>
            </ContainerInner>
        </Container>
    );
};

export default CardDetail;
