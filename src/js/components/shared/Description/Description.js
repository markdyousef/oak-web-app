// @flow
import React, { Component, PropTypes } from 'react';

import css from './Description.css';

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
        this.showEdit = this.showEdit.bind(this);
        this.state = {}
    }
    displayMarkdown() {}
    showEdit() {}
    render() {
        return (
            <div className={css.container}>
                <div className={css.toggle}>
                    <h3>Description</h3>
                </div>
            </div>
        );
    }
}

export default Description;
