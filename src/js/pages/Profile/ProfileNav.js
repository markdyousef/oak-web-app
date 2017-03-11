// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

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
                <Link to="profile" activeClassName={css.activeTab}>Overview</Link>
                <Link activeClassName={css.activeTab}>Insights</Link>
            </div>
        );
    }
}

export default ProfileNav;
