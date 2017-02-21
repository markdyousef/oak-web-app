import React, { Component, PropTypes } from 'react';

import css from './LabelsActionBox.css';

class CreateLabels extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.createContainer}>
                <header>
                    <h3>Create Label</h3>
                </header>
            </div>
        );
    }
}

export default CreateLabels;
