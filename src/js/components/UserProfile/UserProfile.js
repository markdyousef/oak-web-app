import React, { Component, PropTypes } from 'react';

import css from './UserProfile.css';

class UserProfile extends Component {
    static propTypes = {
        userId: PropTypes.string.isRequired
    }
    constructor() {
        super();
        this.state = {}
    }
    render() {
        console.log(this.props);
        return (
            <div className={css.container}>

            </div>
        );
    }
}

export default UserProfile;
