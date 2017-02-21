// @flow
import React, { Component, PropTypes } from 'react';
import Button from '../../shared/Button';

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
    showEdit() {
        console.log('cool');
    }
    render() {
        return (
            <div className={css.container}>
                <div className={css.toggle}>
                    <h3>Description</h3>
                    <Button
                        onClick={this.showEdit}
                        text="Edit"
                        type="transparent"
                    />
                </div>
            </div>
        );
    }
}

export default Description;
