import React, { Component, PropTypes } from 'react';

import css from './UserProfile.css';

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
        console.log(this.props.user)
        return (
            <div className={css.container}>
                <header>
                    <div className={css.profile}>
                        <div className={css.avatar} />
                        <h1>{this.props.userId}</h1>
                    </div>
                </header>
            </div>
        );
    }
}

export default UserProfile;
