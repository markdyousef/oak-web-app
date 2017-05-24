// @flow
import React from 'react';
import { EditorState } from 'draft-js';
// TODO: change back to distributed npm package
// import { Editor } from 'zen-editor';
import Editor from '../Editor/src/components/Editor';
import Comments from '../../containers/CommentsContainer';
import { Container, ContainerInner, Main, EditorContainer } from './styles';
import Name from './Name';
import Toast from '../shared/Toast';

type Props = {
    showComments?: bool,
    editorState?: EditorState,
    isLoading?: bool,
    onChange?: (editorState: EditorState) => void,
    addFile?: (file: Object) => void,
    readOnly?: bool,
    message?: {
        type: string,
        message: string,
        onClick: Function
    },
    onCloseError?: Function
}

const CardDetail = ({ ...props }:Props) => {
    return (
        <Container>
            {props.message && <Toast
                message={props.message}
                onClose={props.onCloseError}
            />}
            <ContainerInner>
                <Main>
                    <EditorContainer>
                        <Editor
                            readOnly={props.readOnly}
                            editorState={props.editorState}
                            onChange={props.onChange}
                            addFile={props.addFile}
                            placeholder="Title..."
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

const defaultProps = {
    readOnly: false,
    showComments: false,
    editorState: null,
    isLoading: false,
    onChange: () => {},
    addFile: () => {},
    message: null,
    onCloseError: () => {}
};

CardDetail.defaultProps = defaultProps;

export default CardDetail;
