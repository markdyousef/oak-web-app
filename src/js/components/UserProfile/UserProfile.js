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
        getInsight: PropTypes.func.isRequired
    }
    static defaultProps = {
        user: {
            profile: {}
        },
        insights: {}
    }
    constructor() {
        super();
        this.state = {}
    }
    componentWillMount() {
        const { getInsight, userId } = this.props;
        getInsight(userId);
    }
    render() {
        const { user, insights } = this.props;
        return (
            <div className={css.container}>
                <header>
                    <div className={css.profile}>
                        <div className={css.avatar}>
                            <Avatar img={user.profile.image_512} />
                        </div>
                        <div className={css.stats}>
                            <Insights insights={insights} />
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default UserProfile;
