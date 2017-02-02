// @flow
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import css from './ChannelStats.css';
import chatIcon from '../../../img/chat.png';
import membersIcon from '../../../img/multiple-users-silhouette.png';

const ChannelStats = ({ data } : Object) => {
    const { name, purpose, members, messages, id } = data;

    return (
        <Link className={css.container} to={`/channel/${id}`}>
            <header>
                <h1>{name}</h1>
                {purpose && purpose.value &&
                    <div className={css.purpose}>
                        <h2>{`"${purpose.value}"`}</h2>
                        <h4>{purpose.creator}</h4>
                    </div>}
            </header>
            <div className={css.statsRow}>
                {members &&
                    <div>
                        <img src={membersIcon} alt="members" />
                        <h5>{members.length}</h5>
                    </div>
                }
                {messages &&
                    <div>
                        <img src={chatIcon} alt="chat" />
                        <h5>{messages.length}</h5>
                    </div>
                }
            </div>
        </Link>
    );
};

ChannelStats.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        purpose: PropTypes.shape({
            value: PropTypes.string.isRequired,
            creator: PropTypes.string.isRequired
        }),
        members: PropTypes.arrayOf(PropTypes.string),
        messages: PropTypes.arrayOf(PropTypes.object)
    }).isRequired
};

export default ChannelStats;
