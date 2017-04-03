// @flow
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../../styles/colors';

const H5 = styled.h5`
    font-size: 14px;
    font-weight: lighter;
    color: ${colors.darkGrey};
    margin-bottom: 5px;
`;

const Default = styled.textarea`
    padding: 12px 8px;
    width: 100%;
    max-width: 400px;
    border-radius: 3px;
    border: 1px solid ${colors.lightGrey};
    font-size: 15px;
    border-radius: 3px;
    outline: none;
    background-color: #fff;
    resize: none;
    &:focus {

        border-color: #67C198
    }
    &:hover {
        border-color: #B5D3C9
    }
`;

const TextField = ({ value, onChange, title, placeholder }:Object) => {
    return (
        <div>
            <H5>{title}</H5>
            <Default
                value={value}
                onChange={event => onChange(event.target.value)}
                placeholder={placeholder}
            />
        </div>
    );
};

TextField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    title: PropTypes.string,
    placeholder: PropTypes.string
};

TextField.defaultProps = {
    value: '',
    title: '',
    placeholder: null
};

export default TextField;
