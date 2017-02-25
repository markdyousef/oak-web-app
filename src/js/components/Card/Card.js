// @flow
import React, { Component, PropTypes } from 'react';

import css from './Card.css';

class Card extends Component {
    static propTypes = {
        title: PropTypes.string,
        content: PropTypes.shape({
            blocks: PropTypes.arrayOf(PropTypes.object),
            entityMap: PropTypes.object
        })
    }
    static defaultProps = {
        title: null,
        content: null
    }
    constructor() {
        super();
        this.renderContent = this.renderContent.bind(this);
        this.formatContent = this.formatContent.bind(this);
        this.state = {};
    }
    formatContent(content: Object) {
        const { blocks } = content;
        return (
            <div>
                {blocks.map(block => <p key={block.key}>{block.text}</p>)}
            </div>
        )
    }
    renderContent() {
        const { content, title } = this.props;

        return (
            <div className={css.content}>
                {title && <h1>{title}</h1>}
                {content && this.formatContent(content)}
            </div>
        );
    }
    render() {
        return (
            <div className={css.container}>
                {this.renderContent()}
            </div>
        );
    }
}

export default Card;
