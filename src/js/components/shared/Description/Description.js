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
        this.state = {
            showEdit: false
        }
    }
    componentWillMount() {
        this.setState({ markdown: MARKDOWN })
    }
    displayMarkdown(markdown: String) {
        return (
            <div>
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
