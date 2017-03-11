// @flow
import React, { Component, PropTypes } from 'react';

import css from './Profile.css';

class ProfileNav extends Component {
    static propTypes = {}
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <div className={css.nav}>
                <div className={css.avatar} />
            </div>
        );
    }
}

export default ProfileNav;
