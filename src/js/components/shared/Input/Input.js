// @flow
import React, { PropTypes } from 'react';

import css from './Input.css';

const Input = ({ title, value, placeholder, onChange, type }:Object) => {
    return (
        <div className={css.container}>
            <input
                type={type || 'text'}
                value={value}
                placeholder={placeholder}
                onChange={event => onChange(event.target.value)}
            />
            <span className={css.highlight} />
            <span className={css.bar} />
            <label htmlFor="input">{title}</label>
        </div>
    );
};

Input.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string
};

Input.defaultProps = {
    value: null,
    placeholder: null,
    type: ''
};

export default Input;
