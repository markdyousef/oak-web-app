// @flow
import React, { PropTypes } from 'react';

import css from './Input.css';

const Input = ({ title, value, placeholder, onChange }:Object) => {
    return (
        <div className={css.container}>
            <label htmlFor="input">{title}</label>
            <input
                value={value}
                placeholder={placeholder}
                onChange={event => onChange(event.target.value)}
            />
        </div>
    );
};

Input.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

Input.defaultProps = {
    value: null,
    placeholder: null
};

export default Input;
