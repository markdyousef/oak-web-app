import React, { Component, PropTypes } from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState } from 'draft-js';
import styled from 'styled-components';
import sideToolbar from './SideToolbar';
import css from './Editor.css';


const { SideToolbar } = sideToolbar;

const plugins = [sideToolbar];

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 50px;
`;

class MainEditor extends Component {
    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }
    onChange = (editorState) => {
        this.setState({
            editorState
        });
    }
    focus = () => {
        this.editor.focus();
    }
    render() {
        const { editorState } = this.state;
        return (
            <Container onClick={this.focus} className={css.editor}>
                <Editor
                    editorState={editorState}
                    onChange={this.onChange}
                    plugins={plugins}
                    ref={(element) => { this.editor = element; }}
                />
                <SideToolbar />
            </Container>
        );
    }
}

export default MainEditor;
