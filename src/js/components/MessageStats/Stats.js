import React, { PropTypes } from 'react';

import css from './MessageStats.css';

const Stats = ({ message }: Object) => {
    return (
        <div className={css.stats}>
            {message.text}
        </div>
    );
};

Stats.propTypes = {
    message: PropTypes.shape({
        text: PropTypes.string.isRequired
    })
};

export default Stats;
