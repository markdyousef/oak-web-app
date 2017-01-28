// @flow
import React, { Component, PropTypes } from 'react';
import MessageItem from './MessageItem';
import Stats from './Stats';

import css from './MessageStats.css';

class MessageStats extends Component {
    static propTypes = {
        data: PropTypes.shape({
            channel: PropTypes.string.isRequired,
            messages: PropTypes.arrayOf(PropTypes.object)
        })
    };
    constructor() {
        super();
        this.renderMessages = this.renderMessages.bind(this);
        this.renderStats = this.renderStats.bind(this);
        this.state = {
            activeMessage: null
        };
    }
    renderMessages() {
        const { data } = this.props;
        if (data && data.messages) {
            return data.messages.map(message => (
                <MessageItem
                    onClick={() => this.setState({ activeMessage: message })}
                    message={message}
                    key={message.ts}
                />
            ));
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
