import React, { Component, PropTypes } from 'react';

import css from './Profile.css';

class ProfileInfo extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        description: PropTypes.string
    }
    static defaultProps = {
        description: null
    }
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { name, username } = this.props;
        return (
            <div className={css.infoContainer}>
                <div className={css.name}>
                    <h1>{name}</h1>
                    <h2>{username}</h2>
                </div>
            </div>
        );
    }
}

export default ProfileInfo;
