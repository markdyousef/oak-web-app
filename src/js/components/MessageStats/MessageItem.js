import React, { PropTypes } from 'react';

import css from './MessageStats.css';

const MessageItem = ({ message }:Object) => {
    return (
        <div className={css.messageItem}>
            <div className={css.userAvatar}>
                <span />
            </div>
            <div>
                <p>{message.text}</p>
            </div>
        </div>
    );
}

MessageItem.propTypes = {
    message: PropTypes.shape({
        text: PropTypes.string.isRequired
    })
}

export default MessageItem;
