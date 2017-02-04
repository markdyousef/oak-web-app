// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import css from './ChannelDetail.css';

import MessageStats from '../../containers/MessageStatsContainer';
import TeamMembers from '../../containers/TeamMembersContainer';
import MessageTone from '../MessageTone';

class ChannelDetail extends Component {
    static propTypes = {
        data: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            members: PropTypes.arrayOf(PropTypes.string),
            messages: PropTypes.arrayOf(PropTypes.object)
        }),
        tone: PropTypes.shape({
            document_tone: PropTypes.object

        }),
        getChannel: PropTypes.func.isRequired,
        params: PropTypes.shape({
            channelId: PropTypes.string
        }).isRequired,
        team: PropTypes.string.isRequired,
        isLoading: PropTypes.bool.isRequired
    };
    static defaultProps = {
        data: {},
        tone: null
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
        const { data, isLoading, tone } = this.props;

        if (isLoading) return <div>Loading</div>;

        return (
            <div className={css.container}>
                <nav>
                    <Link to="/">CHANNELS /</Link>
                    <h4>{data.name}</h4>
                </nav>
                <div className={css.membersContainer}>
                    <h2>MEMBERS</h2>
                    <TeamMembers />
                </div>
                <div className={css.messageContainer}>
                    <MessageStats channel={data.name} messages={data.messages} />
                </div>
                <div className={css.toneContainer}>
                    <MessageTone tone={tone} />
                </div>
            </div>
        );
    }
}

export default ChannelDetail;
