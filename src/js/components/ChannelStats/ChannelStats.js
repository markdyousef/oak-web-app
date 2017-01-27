// @flow
import React, { PropTypes } from 'react';

import css from './ChannelStats.css';

const ChannelStats = ({ data } : Object) => {
    const { name } = data;
    return (
        <div className={css.container}>
            <h1>{name}</h1>
        </div>
    );
};

ChannelStats.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired
};

export default ChannelStats;
