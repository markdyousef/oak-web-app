import React, { PropTypes } from 'react';

import css from './MessageStats.css';

const MessageItem = ({ message }:Object) => {
    return (
        <div className={css.message}>
            {message.text}
        </div>
    );
}

MessageItem.propTypes = {
    message: PropTypes.shape({
        text: PropTypes.string.isRequired
    })
}

export default MessageItem;
