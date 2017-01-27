// @flow
import React, { PropTypes } from 'react';

import css from './ChannelStats.css';

const ChannelStats = ({ data } : Object) => {
    console.log(data);
    const { name, purpose } = data;
    return (
        <div className={css.container}>
            <header>
                <h1>{name}</h1>
                {purpose && purpose.value &&
                    <div className={css.purpose}>
                        <h2>{purpose.value}</h2>
                        <h4>{purpose.creator}</h4>
                    </div>}
            </header>
        </div>
    );
};

ChannelStats.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        purpose: PropTypes.shape({
            value: PropTypes.string.isRequired,
            creator: PropTypes.string.isRequired
        })
    }).isRequired
};

export default ChannelStats;
