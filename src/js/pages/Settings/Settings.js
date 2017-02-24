import React, { Component, PropTypes } from 'react';
import TopNav from '../../components/TopNav';

import css from './Settings.css';

class Settings extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.container}>
                <TopNav />
                SETTINGS
            </div>
        );
    }
}

export default Settings;
