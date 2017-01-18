// @flow
import React, { PropTypes } from 'react';

import css from './Button.css';

const Button = ({ onClick, text }) => (
    <button
        onClick={onClick}
        className={css.button}
    >
        {text}
    </button>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default Button;
