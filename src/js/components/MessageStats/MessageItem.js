// @flow
import React, { PropTypes } from 'react';
import moment from 'moment';

import css from './MessageStats.css';

const MessageItem = ({ message }:Object) => {
    return (
        <div className={css.messageItem}>
            <div className={css.userAvatar}>
                <span />
            </div>
            <div className={css.text}>
                <p>{message.text}</p>
            </div>
            <div className={css.time}>
                {moment(message.ts * 1000).fromNow()}
            </div>
        </div>
    );
}

MessageItem.propTypes = {
    message: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        ts: PropTypes.string.isRequired
    })
}

export default MessageItem;
