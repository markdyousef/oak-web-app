// @flow
import React, { Component, PropTypes } from 'react';

import css from './UserProfile.css';
import Avatar from '../shared/Avatar';
import Insights from '../Insights';
import MessageTone from '../MessageTone';

class UserProfile extends Component {
    static propTypes = {
        userId: PropTypes.string.isRequired,
        user: PropTypes.shape({
            profile: PropTypes.object
        }),
        tone: PropTypes.shape({
            document_tone: PropTypes.object
        }),
        users: PropTypes.arrayOf(PropTypes.object),
        insights: PropTypes.object,
        insightsOther: PropTypes.object,
        getInsight: PropTypes.func.isRequired,
        getUser: PropTypes.func.isRequired
    }
    static defaultProps = {
        user: {
            profile: {}
        },
        users: [],
        insights: {},
        insightsOther: {},
        tone: {}
    }
    constructor() {
        super();
        this.renderUsers = this.renderUsers.bind(this);
        this.state = {};
    }
    componentWillMount() {
        const { getInsight, getUser, userId } = this.props;
        getInsight(userId);
        getUser(userId);
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
        const { user, insights, insightsOther, tone } = this.props;
        return (
            <div className={css.container}>
                <header>
                    <div className={css.profile}>
                        <div className={css.avatar}>
                            <Avatar img={user.profile.image_512} />
                        </div>
                    </div>
                    <div className={css.compare}>
                        <h1>PERSONAL INSIGHTS</h1>
                        <h3>Compare with:</h3>
                        <div className={css.users}>
                            {this.renderUsers()}
                        </div>
                    </div>
                </header>
                <div className={css.stats}>
                    <Insights insights={insights} insightsOther={insightsOther} />
                    <MessageTone tone={tone} />
                </div>
            </div>
        );
    }
}

export default UserProfile;
