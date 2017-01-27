// @flow
import React, { PropTypes } from 'react';

import css from './TeamStats.css';

const TeamStats = ({ data } : Object) => {
    const { name } = data;
    return (
        <div className={css.container}>
            <h1>{name}</h1>
        </div>
    );
};

TeamStats.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired
};

export default TeamStats;
