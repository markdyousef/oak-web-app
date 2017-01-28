import React, { PropTypes } from 'react';

import css from './MessageStats.css';

const Stats = ({ message }: Object) => {
    return (
        <div className={css.stats}>
            <p>{message.text}</p>
        </div>
    );
};

Stats.propTypes = {
    message: PropTypes.shape({
        text: PropTypes.string.isRequired,
        attachments: PropTypes.array
    })
};

export default Stats;
