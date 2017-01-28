// @flow
import React, { PropTypes } from 'react';
import moment from 'moment';

import css from './MessageStats.css';

const MessageItem = ({ message, onClick }:Object) => {
    return (
        <div
            className={css.messageItem}
            onClick={onClick}
        >
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
    }),
    onClick: PropTypes.func.isRequired
}

export default MessageItem;
