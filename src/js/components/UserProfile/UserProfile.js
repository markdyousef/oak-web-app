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
        users: PropTypes.arrayOf(PropTypes.object),
        insights: PropTypes.object,
        insightsOther: PropTypes.object,
        getInsight: PropTypes.func.isRequired
    }
    static defaultProps = {
        user: {
            profile: {}
        },
        users: [],
        insights: {},
        insightsOther: {}
    }
    constructor() {
        super();
        this.renderUsers = this.renderUsers.bind(this);
        this.state = {};
    }
    componentWillMount() {
        const { getInsight, userId } = this.props;
        getInsight(userId);
    }
    renderUsers() {
        const { getInsight, users, userId } = this.props;

        if (users) {
            const others = users.filter(user => user.id !== userId);
            return others.map(other => (
                <span
                    key={other.id}
                    onClick={() => getInsight(userId, other.id)}
                >
                    <Avatar img={other.profile.image_512} />
                </span>
            ));
        }
        return null;
    }
    render() {
        const { user, insights, insightsOther } = this.props;
        return (
            <div className={css.container}>
                <header>
                    <div className={css.profile}>
                        <div className={css.avatar}>
                            <Avatar img={user.profile.image_512} />
                        </div>
                        <h1>PERSONAL INSIGHTS</h1>
                        <h3>Compare with:</h3>
                        <div className={css.users}>
                            {this.renderUsers()}
                        </div>
                        <div className={css.stats}>
                            <Insights insights={insights} insightsOther={insightsOther} />
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default UserProfile;
