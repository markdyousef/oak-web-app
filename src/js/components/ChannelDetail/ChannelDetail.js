// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import css from './ChannelDetail.css';

import MessageStats from '../../containers/MessageStatsContainer';

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
    constructor() {
        super();
        this.renderMembers = this.renderMembers.bind(this);
        this.state = {};
    }
    componentWillMount() {
        const { team, params, getChannel } = this.props;
        getChannel(team, params.channelId);
    }
    renderMembers() {
        const { data } = this.props;

        // check if members is an array
        const members = (data.members) ? data.members : [];
        // some channels has no members
        if (members.length === 0) {
            return <div className={css.noMembers}>No members</div>;
        }
        return members.map(member => (
            <div className={css.member} key={member}>
                <div />
                <h4>{member}</h4>
            </div>
        ));
    }
    render() {
        const { data, isLoading } = this.props;

        if (isLoading) return <div>Loading</div>

        return (
            <div className={css.container}>
                <nav>
                    <Link to="/">CHANNELS /</Link>
                    <h1>{data.name}</h1>
                </nav>
                <div className={css.membersContainer}>
                    {this.renderMembers()}
                </div>
                <div className={css.messageContainer}>
                    <MessageStats channel={data.name} messages={data.messages} />
                </div>
            </div>
        );
    }
}

export default ChannelDetail;
