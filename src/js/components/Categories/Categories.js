// @flow
import React, { Component, PropTypes } from 'react';

import css from './Categories.css';

class Categories extends Component {
    static propTypes = {};
    static defaultProps = {};
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.container}>
                Categories
            </div>
        );
    }
}

export default Categories;
