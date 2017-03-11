import React, { Component, PropTypes } from 'react';
import CoverPhoto from './CoverPhoto';
import ProfileNav from './ProfileNav';

import css from './Profile.css';

class Profile extends Component {
    static propTypes = {
        data: PropTypes.shape({
            loading: PropTypes.bool,
            me: PropTypes.object
        }).isRequired
    };
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.container}>
                <CoverPhoto picture={null} />
                <ProfileNav />
            </div>
        );
    }
}

export default Profile;
