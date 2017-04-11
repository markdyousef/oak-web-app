// @flow
import React, { Component } from 'react';
import { RichUtils, Editor } from 'draft-js';
// TODO: add custom styling
import 'draft-js/dist/Draft.css';
import styled from 'styled-components';
import Toolbar from '../Toolbar';
import FloatingActionButton from '../FloatingActionButton';
import customRenderer from '../../utils/customRenderer';
import { Block } from '../../utils/constants';

const Container = styled.div`
    ${''/* padding: 30px 30px; */}
    box-sizing: border-box;
    position: relative;
    & h1 {
        font-size: 48px;
        font-weight: bold;
        letter-spacing: -.024em;
        line-height: 1.18;
        margin-bottom: 20px;
        color: #131517;

    }
    & h2 {
        font-size: 28px;
        font-weight: normal;
        letter-spacing: -.008em;
        line-height: 1.24;
        margin-bottom: 20px;
        color: #797C80;
    }
    & ul {
        padding-left: 0;
        list-style: none;
    }
    & ol {
        padding-left: 0;
        list-style: none;
    }
    & li {
        font-size: 21px;
        line-height: 1,78;
    }
`;

const EditorContainer = styled.div`
    cursor: text;
    position: relative;
    margin: 0 auto;
    margin-top: 10px;
    max-width: 700px;
`;

type DefaultProps = {
    editorState: Object,
    canEdit: false,
    onChange: Function
}

type Props = {
    editorState: Object,
    canEdit: boolean,
    onChange: Function
}

type State = {
    editorState: Object
}

export default class App extends Component {
    defaultProps: DefaultProps
    props: Props
    state: State
    onTab = (event:Object) => {
        const { onChange, editorState } = this.props;
        // depth on ul and ol
        const levels = 2;
        const newEditorState = RichUtils.onTab(event, editorState, levels);
        if (newEditorState !== editorState) {
            onChange(newEditorState);
        }
    };
    getEditorState = () => this.state.editorState;
    focus = () => this.editor.focus();
    toggleBlockType = (blockType:Object) => {
        const { onChange, editorState } = this.props;
        const type = RichUtils.getCurrentBlockType(editorState);
        if (type.indexOf(`${Block.ATOMIC}:`) === 0) return;
        onChange(
            RichUtils.toggleBlockType(
                editorState,
                blockType
            )
        );
    }
    toggleInlineStyle = (inlineStyle:Object) => {
        const { onChange, editorState } = this.props;
        onChange(
            RichUtils.toggleInlineStyle(
                editorState,
                inlineStyle
            )
        );
    }
    render() {
        const { canEdit, editorState, onChange } = this.props;
        const showToolbar = !editorState.getSelection().isCollapsed();
        return (
            <Container>
                <EditorContainer>
                    <Editor
                        ref={(node) => { this.editor = node; }}
                        editorState={editorState}
                        spellCheck
                        placeholder="Write something cool..."
                        onChange={onChange}
                        blockRendererFn={customRenderer(editorState, onChange)}
                        onTab={this.onTab}
                        readOnly={!canEdit}
                    />
                    {canEdit && <FloatingActionButton
                        editorState={editorState}
                        focus={this.focus}
                        setEditorState={onChange}
                    />}
                    <Toolbar
                        editorState={editorState}
                        toggleBlockType={this.toggleBlockType}
                        toggleInlineStyle={this.toggleInlineStyle}
                        focus={this.focus}
                        editorNode={this.editor}
                        showToolbar={showToolbar}
                    />
                </EditorContainer>
            </Container>
        );
    }
}
