// @flow
import React from 'react';
import { EditorState } from 'draft-js';
// TODO: change back to distributed npm package
// import { Editor } from 'zen-editor';
import Editor from '../Editor/src/components/Editor';
import TopBar from './TopBar';
import Comments from '../../containers/CommentsContainer';
import { Container, ContainerInner, Main, EditorContainer, editorStyle } from './styles';
import Name from './Name';
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
    changeName: (name: string) => void,
    message: ?{
        type: string,
        message: string,
        onClick: Function
    },
    onCloseError: Function
}

const CardDetail = ({ ...props }:Props) => {
    console.log(props.message);
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
                            placeholder="Write something"
                            showFAB
                            titel={<Name
                                onChange={props.changeName}
                                name={props.name}
                                readOnly={!props.showEdit}
                            />}
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
