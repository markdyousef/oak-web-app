import React, { Component, PropTypes } from 'react';

import css from './Settings.css';

class Settings extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.container}>
                SETTINGS
            </div>
        );
    }
}

export default Settings;
