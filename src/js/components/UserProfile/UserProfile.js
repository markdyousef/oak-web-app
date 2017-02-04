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
        toneOther: PropTypes.shape({
            document_tone: PropTypes.object
        }),
        users: PropTypes.arrayOf(PropTypes.object),
        insight: PropTypes.object,
        insightOther: PropTypes.object,
        getInsight: PropTypes.func.isRequired,
        getUser: PropTypes.func.isRequired
    }
    static defaultProps = {
        user: {
            profile: {}
        },
        users: [],
        insighs: {},
        insightOther: {},
        tone: {},
        toneOther: {}
    }
    constructor() {
        super();
        this.renderUsers = this.renderUsers.bind(this);
        this.state = {
            otherId: null
        };
    }
    componentWillMount() {
        const { getInsight, getUser, userId } = this.props;
        getInsight(userId);
        getUser(userId);
    }
    renderUsers() {
        const { getInsight, users, userId } = this.props;
        const { otherId } = this.state;

        if (users) {
            const others = users.filter(user => user.id !== userId);
            return others.map(other => (
                <span
                    key={other.id}
                    onClick={() => {
                        getInsight(userId, other.id);
                        this.setState({ otherId: other.id });
                    }}
                    className={(otherId === other.id) ?
                        css.active : null
                    }
                >
                    <Avatar img={other.profile.image_512} />
                </span>
            ));
        }
        return null;
    }
    render() {
        const { user, insight, insightOther, tone, toneOther } = this.props;
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
                    <Insights insights={insight} insightsOther={insightOther} />
                    <MessageTone tone={tone} toneOther={toneOther} />
                </div>
            </div>
        );
    }
}

export default UserProfile;
