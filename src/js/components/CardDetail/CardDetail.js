// @flow
import React from 'react';
// TODO: change back to distributed npm package
// import { Editor } from 'zen-editor';
import Editor from '../Editor/src/components/Editor';
import Comments from '../../containers/CommentsContainer';
import { Container, ContainerInner, Main, EditorContainer } from './styles';
import { Props } from './types';
import Toast from '../shared/Toast';
import Author from './Author';

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
                        {props.existingCard &&
                            <Author
                                creator={props.creator}
                            />
                        }
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
