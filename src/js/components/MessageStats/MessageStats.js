// @flow
import React, { Component, PropTypes } from 'react';
import MessageItem from './MessageItem';

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
        this.state = {};
    }
    renderMessages() {
        const { data } = this.props;
        if (data && data.messages) {
            return data.messages.map((message, index) => (
                <MessageItem message={message} key={index} />
            ));
        }
        return <div className={css.noMessage}>No Messages</div>
    }
    render() {
        return (
            <div className={css.container}>
                <div className={css.messageList}>
                    {this.renderMessages()}
                </div>
            </div>
        );
    }
}

export default MessageStats;
