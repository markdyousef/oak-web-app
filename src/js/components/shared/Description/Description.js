// @flow
import React, { Component, PropTypes } from 'react';
import { Editor, createEditorState } from 'medium-draft';
import { convertToRaw } from 'draft-js';
import mediumDraftExporter from 'medium-draft/lib/exporter';
import 'medium-draft/lib/index.css';
import 'medium-draft/lib/basic.css';
import ReactHtmlParser from 'react-html-parser';

import css from './Description.css';

class Description extends Component {
    static propTypes = {
        showEdit: PropTypes.bool,
        content: PropTypes.string,
        onChange: PropTypes.func.isRequired
    };
    static defaultProps = {
        content: null,
        showEdit: null
    };
    constructor() {
        super();
        this.displayMarkdown = this.displayMarkdown.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            editorState: createEditorState()
        }
    }
    onChange(state: Object) {
        const { editorState } = this.state;
        const { onChange } = this.props;
        this.setState({ editorState: state });
        const raw = convertToRaw(editorState.getCurrentContent());
        onChange(raw);
    }
    displayMarkdown() {
        const { editorState } = this.state;
        const current = editorState.getCurrentContent();
        const medium = mediumDraftExporter(current);
        return ReactHtmlParser(medium);
    }
    render() {
        const { editorState } = this.state;
        const { showEdit } = this.props;
        return (
            <div className={css.container}>
                {showEdit && <Editor
                    ref="editor"
                    editorState={editorState}
                    onChange={this.onChange}
                />}
                {!showEdit && this.displayMarkdown()}
            </div>
        );
    }
}

export default Description;
