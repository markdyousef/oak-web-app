import React, { Component, PropTypes } from 'react';
import CoverPhoto from './CoverPhoto';
import ProfileNav from './ProfileNav';
import ProfileInfo from './ProfileInfo';

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
        const { data } = this.props;

        if (data.loading) return <div>LOADING</div>;

        return (
            <div className={css.container}>
                <CoverPhoto picture={null} />
                <ProfileNav />
                <ProfileInfo name={data.me.name} username={data.me.username} />
            </div>
        );
    }
}

export default Profile;
