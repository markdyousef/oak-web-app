// @flow
import React, { PropTypes } from 'react';

import css from './Admin.css';

const Team = ({ team, onSelect }) => {
    return (
        <div className={css.team}>
            <h4>{team.name}</h4>
        </div>
    );
};

Team.propTypes = {
    team: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }),
    onSelect: PropTypes.func.isRequired
};
