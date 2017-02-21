// @flow
import React, { PropTypes } from 'react';

import css from './Button.css';

const Button = ({ onClick, text, value, type }: Object) => {
    let className = null;
    switch (type) {
    case 'like':
        className = css.like;
        break;
    case 'transparent':
        className = css.transparent;
        break;
    case 'primary':
        className = css.primary
        break;
    default:
        break;
    }
    return (
        <button
            onClick={onClick}
            className={[css.container, className].join(' ')}
        >
            <div>
                {value !== null && <label htmlFor="value">{value}</label>}
                <label className={css.title} htmlFor="text">{text}</label>
            </div>
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.number
};

Button.defaultProps = {
    type: null,
    value: null
};

export default Button;
