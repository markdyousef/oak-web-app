import React, { Component, PropTypes } from 'react';

import css from './UserProfile.css';
import Avatar from '../shared/Avatar';

class UserProfile extends Component {
    static propTypes = {
        userId: PropTypes.string.isRequired,
        user: PropTypes.shape({
            profile: PropTypes.object
        })
    }
    static defaultProps = {
        user: {
            profile: {}
        }
    }
    constructor() {
        super();
        this.state = {}
    }
    componentWillMount() {
        // getUser
    }
    render() {
        const { user } = this.props;
        return (
            <div className={css.container}>
                <header>
                    <div className={css.profile}>
                        <div className={css.avatar}>
                            <Avatar img={user.profile.image_original} />
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default UserProfile;
