// @flow
import React, { PropTypes } from 'react';
import moment from 'moment';

import Avatar from '../shared/Avatar';

import css from './MessageStats.css';

const MessageItem = ({ message, member, onClick }:Object) => {
    const { profile } = member

    return (
        <div
            className={css.messageItem}
            onClick={onClick}
        >
            <div className={css.userAvatar}>
                <Avatar img={profile.image_72} />
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
        user: PropTypes.string,
        ts: PropTypes.string.isRequired
    }),
    member: PropTypes.shape({
        profile: PropTypes.object
    }),
    onClick: PropTypes.func.isRequired
};

MessageItem.defaultProps = {
    message: {},
    member: { profile: {} }
};

export default MessageItem;
