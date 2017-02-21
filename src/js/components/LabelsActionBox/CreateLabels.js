import React, { Component, PropTypes } from 'react';
import Input from '../shared/Input';

import css from './LabelsActionBox.css';

class CreateLabels extends Component {
    constructor() {
        super();
        this.state = {
            name: ''
        };
    }
    render() {
        const { name } = this.state;
        return (
            <div className={css.createContainer}>
                <header>
                    <h3>Create Label</h3>
                </header>
                <div className={css.name}>
                    <Input
                        title="NAME"
                        value={name}
                        onChange={value => this.setState({ name: value })}
                    />
                </div>
            </div>
        );
    }
}

export default CreateLabels;
