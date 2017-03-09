import React, { Component, PropTypes } from 'react';

import css from './Admin.css';

class Admin extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.container}>
                HELLO
            </div>
        );
    }
}

export default Admin;
