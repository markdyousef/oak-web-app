import React, { PropTypes } from 'react';

import css from './Insights.css';

const Relative = ({ category, subCategories }: Object) => {
    return (
        <div className={css.relative}>

        </div>
    );
}

Relative.propTypes = {
    category: PropTypes.shape({
        name: PropTypes.string.isRequired,
        percentil: PropTypes.number.isRequired
    })
}

Relative.defaultProps = {
    category: {}
};

export default Relative;
