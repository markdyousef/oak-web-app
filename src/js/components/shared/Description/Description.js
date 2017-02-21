// @flow
import React, { Component, PropTypes } from 'react';
import Button from '../../shared/Button';
import Markdown from 'react-remarkable';

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
        this.state = {
            showEdit: false
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
    onMouseClick(event) {
        // close edit if open
        if (event.path.filter(item => item.className === 'edit-markdown').length === 0) {
            this.setState({ showEdit: false })
        }
    }
    displayMarkdown(markdown: String) {
        return (
            <div
                onClick={() => this.setState({ showEdit: true })}
            >
                <Markdown>
                    {markdown}
                </Markdown>
            </div>
        );
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
        const { showEdit } = this.state;
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
                <div className={css.description}>
                    {this.renderDescription()}
                </div>
            </div>
        );
    }
}

export default Description;
