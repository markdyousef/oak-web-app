// @flow
import React, { Component, PropTypes } from 'react';
import { Editor, createEditorState } from 'medium-draft';
import { convertToRaw } from 'draft-js';
import mediumDraftExporter from 'medium-draft/lib/exporter';
import 'medium-draft/lib/index.css';
import 'medium-draft/lib/basic.css';
import ReactHtmlParser from 'react-html-parser';

import Button from '../../shared/Button';

import css from './Description.css';

const MARKDOWN = '# Remarkable rulezz!';

class Description extends Component {
    static propTypes = {
        markdown: PropTypes.string
    };
    static defaultProps = {
        markdown: null
    };
    constructor() {
        super();
        this.displayMarkdown = this.displayMarkdown.bind(this);
        this.renderDescription = this.renderDescription.bind(this);
        this.onMouseClick = this.onMouseClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            showEdit: false,
            editorState: createEditorState()
        }
    }
    componentWillMount() {
        this.setState({ markdown: MARKDOWN })
    }
    componentDidMount() {
        window.addEventListener('mousedown', this.onMouseClick, false);
    }
    componentWillUnmount() {
        window.removeEventListener('mousedown', this.onMouseClick);
    }
    onChange(state) {
        const { editorState } = this.state;
        this.setState({ editorState: state });
        console.log(convertToRaw(editorState.getCurrentContent()));
    }
    onMouseClick(event) {
        // close edit if open
        // if (event.path.filter(item => item.className === 'edit-markdown').length === 0) {
        //     this.setState({ showEdit: false })
        // }
    }
    displayMarkdown() {
        const { editorState } = this.state;
        const current = editorState.getCurrentContent();
        const medium = mediumDraftExporter(current);
        return ReactHtmlParser(medium);

    }
    renderDescription() {
        const { showEdit, markdown } = this.state;

        if (showEdit) {
            return (
                <textarea
                    value={markdown}
                    onChange={event => this.setState({ markdown: event.target.value })}
                    className="edit-markdown"
                />
            );
        }
        return this.displayMarkdown(markdown);
    }
    render() {
        const { showEdit, editorState } = this.state;
        return (
            <div className={css.container}>
                <div className={css.toggle}>
                    <h3>Description</h3>
                    <Button
                        onClick={() => this.setState({ showEdit: !showEdit })}
                        text="Edit"
                        type="transparent"
                    />
                </div>
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
