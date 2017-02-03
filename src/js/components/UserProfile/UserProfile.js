// @flow
import React, { Component, PropTypes } from 'react';

import css from './UserProfile.css';
import Avatar from '../shared/Avatar';
import Insights from '../Insights';

class UserProfile extends Component {
    static propTypes = {
        userId: PropTypes.string.isRequired,
        user: PropTypes.shape({
            profile: PropTypes.object
        }),
        insights: PropTypes.object,
        otherInsights: PropTypes.object,
        getInsight: PropTypes.func.isRequired
    }
    static defaultProps = {
        user: {
            profile: {}
        },
        insights: {},
        otherInsights: {}
    }
    constructor() {
        super();
        this.renderUsers = this.renderUsers.bind(this);
        this.state = {};
    }
    renderUsers() {
        const { getInsight, users } = this.props;

    }
    componentWillMount() {
        const { getInsight, userId } = this.props;
        getInsight(userId);
    }
    render() {
        const { user, insights, otherInsights } = this.props;
        return (
            <div className={css.container}>
                <header>
                    <div className={css.profile}>
                        <div className={css.avatar}>
                            <Avatar img={user.profile.image_512} />
                        </div>
                        <div className={css.compare}>
                            {this.renderUsers}
                        </div>
                        <div className={css.stats}>
                            <Insights insights={insights} otherInsights={otherInsights} />
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default UserProfile;
