// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import css from './ChannelDetail.css';

import MessageStats from '../../containers/MessageStatsContainer';
import TeamMembers from '../../containers/TeamMembersContainer';

class ChannelDetail extends Component {
    static propTypes = {
        data: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            members: PropTypes.arrayOf(PropTypes.string),
            messages: PropTypes.arrayOf(PropTypes.object)
        }),
        getChannel: PropTypes.func.isRequired,
        params: PropTypes.shape({
            channelId: PropTypes.string
        }).isRequired,
        team: PropTypes.string.isRequired,
        isLoading: PropTypes.bool.isRequired
    };
    static defaultProps = {
        data: {}
    }
    constructor() {
        super();
        this.state = {};
    }
    componentWillMount() {
        const { team, params, getChannel } = this.props;
        getChannel(team, params.channelId);
    }
    render() {
        const { data, isLoading } = this.props;

        if (isLoading) return <div>Loading</div>;

        return (
            <div className={css.container}>
                <nav>
                    <Link to="/">CHANNELS /</Link>
                    <h1>{data.name}</h1>
                </nav>
                <div className={css.membersContainer}>
                    <TeamMembers />
                </div>
                <div className={css.messageContainer}>
                    <MessageStats channel={data.name} messages={data.messages} />
                </div>
            </div>
        );
    }
}

export default ChannelDetail;
