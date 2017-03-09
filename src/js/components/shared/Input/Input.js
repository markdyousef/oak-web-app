// @flow
import React, { PropTypes } from 'react';

import css from './Input.css';

const Input = ({ value, placeholder, onChange, type }:Object) => {
    return (
        <div className={css.container}>
            <input
                type={type || 'text'}
                value={value}
                placeholder={placeholder}
                onChange={event => onChange(event.target.value)}
            />
        </div>
    );
};

Input.propTypes = {
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
