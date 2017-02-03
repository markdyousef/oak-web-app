// @flow
import React, { Component, PropTypes } from 'react';
import MessageItem from './MessageItem';
import Stats from './Stats';

import css from './MessageStats.css';

class MessageStats extends Component {
    static propTypes = {
        channel: PropTypes.string.isRequired,
        messages: PropTypes.arrayOf(PropTypes.object),
        members: PropTypes.arrayOf(PropTypes.object),
        isLoading: PropTypes.bool.isRequired
    };
    static defaultProps = {
        members: []
    }
    constructor() {
        super();
        this.renderMessages = this.renderMessages.bind(this);
        this.renderStats = this.renderStats.bind(this);
        this.state = {
            activeMessage: null
        };
    }
    renderMessages() {
        const { messages, members } = this.props;
        if (messages) {
            return messages.map((message) => {
                const member = members.filter(user => user.id === message.user)[0];

                return (
                    <MessageItem
                        onClick={() => this.setState({ activeMessage: message })}
                        message={message}
                        member={member}
                        key={message.ts}
                    />
                );
            });
        }
        return <div className={css.noMessage}>No Messages</div>;
    }
    renderStats() {
        const { activeMessage } = this.state;

        if (activeMessage) {
            return <Stats message={activeMessage} />
        }
        return <div className={css.noStats}>No stats</div>
    }
    render() {
        const { isLoading } = this.props;

        if (isLoading) return <div>Loading</div>;
        return (
            <div className={css.container}>
                <div className={css.messageList}>
                    {this.renderMessages()}
                </div>
                <div className={css.messageStats}>
                    {this.renderStats()}
                </div>
            </div>
        );
    }
}

export default MessageStats;
