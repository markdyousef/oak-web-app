// @flow
import React, { Component } from 'react';
import { EditorState, getDefaultKeyBinding, Editor } from 'draft-js';
import styled from 'styled-components';
import colors from '../../styles/colors';

const Container = styled.div`
    background: ${colors.white};
    border-top: 1px solid ${colors.lightGrey};
    ${''/* z-index: 100; */}
    padding: 16px;
`;

const Input = styled.div`
    border: 1px solid ${colors.lightGrey};
    padding: 10px 12px;
    border-radius: 3px;
    &:hover {
        border-color: #B5D3C9;
    }
    &:focus {
        border-color: #34b289;
    }
    &::placeholder {
        color: #b5b7b9;
    }
    &:focus::placeholder {
        color: #e1e1e1;
    }
`;

type DefaultProps = {}

type Props = {
    createComment: Function
}

type State = {
    editorState: EditorState
}

export default class CommentBox extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps;
    props: Props;
    state: State;
    editor: Editor;
    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }
    onChange = (editorState: EditorState) => this.setState({ editorState });
    focus = () => this.editor.focus();
    keyBinding = (event: Object) => {
        if (event.keyCode === 13) {
            return 'send-message';
        }
        return getDefaultKeyBinding(event);
    }
    handleKeyCommand = (command:string) => {
        if (command === 'send-message') {
            const { createComment } = this.props;
            const { editorState } = this.state;
            createComment(editorState);
            this.setState({ editorState: EditorState.createEmpty() });
            return 'handled';
        }
        return 'not-handled';
    }
    render() {
        const { editorState } = this.state;
        return (
            <Container>
                <Input onClick={this.focus}>
                    <Editor
                        editorState={editorState}
                        onChange={this.onChange}
                        ref={(element) => { this.editor = element; }}
                        handleKeyCommand={this.handleKeyCommand}
                        keyBindingFn={this.keyBinding}
                        placeholder="Write a comment..."
                    />
                </Input>
            </Container>
        );
    }
}
