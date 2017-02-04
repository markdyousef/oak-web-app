import React, { Component, PropTypes } from 'react';

import TopNav from '../../components/TopNav';

import css from './MyProfile.css';

class MyProfile extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.container}>
                <TopNav />
            </div>
        );
    }
}

export default MyProfile;
