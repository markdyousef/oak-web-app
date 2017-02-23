import React, { Component, PropTypes } from 'react';

import css from './Profile.css';

class Profile extends Component {
    static propTypes = {};
    constructor() {
        super();
        this.state = {}
    }
    render() {
        console.log('hello');
        return (
            <div className={css.container}>
                PROFILE
            </div>
        );
    }
}

export default Profile;
