// @flow
import React, { Component, PropTypes } from 'react';
import CreateLabels from './CreateLabels';

import css from './LabelsActionBox.css';

class LabelsActionBox extends Component {
    static propTypes = {
        close: PropTypes.func.isRequired
    };
    static defaultProps = {};
    constructor() {
        super();
        this.renderLabels = this.renderLabels.bind(this);
        this.state = {
            showCreate: true
        };
    }
    renderLabels() {
        const { close } = this.props;
        const { showCreate } = this.state;

        if (showCreate) {
            return (
                <CreateLabels
                    onCreate={close}
                />
            );
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
