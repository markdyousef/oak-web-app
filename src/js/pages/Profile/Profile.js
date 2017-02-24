import React, { Component, PropTypes } from 'react';
import TopNav from '../../components/TopNav';

import css from './Profile.css';

class Profile extends Component {
    static propTypes = {};
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <div className={css.container}>
                <TopNav />
                PROFILE
            </div>
        );
    }
}

export default Profile;
