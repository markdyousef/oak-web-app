// @flow
import React, { Component, PropTypes } from 'react';

import css from './LabelsActionBox.css';

class LabelsActionBox extends Component {
    static propTypes = {};
    static defaultProps = {};
    constructor() {
        super();
        this.renderLabels = this.renderLabels.bind(this);
        this.state = {
            showCreate: true
        };
    }
    renderLabels() {
        const { showCreate } = this.state;

        if (showCreate) {
            return null;
        }
        return null;
    }
    render() {
        return (
            <div className={css.container}>
                {this.renderLabels()}
            </div>
        );
    }
}

export default LabelsActionBox;
