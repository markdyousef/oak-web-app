// @flow
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../../styles/colors';

const valid = (notValid) => {
    if (notValid) {
        return `
        background-color: rgba(232, 115, 133, 0.1);
        border-color: rgba(232, 115, 133, 0.75)
        `;
    }
    return `
    background-color: #fff;
    &:focus {

        border-color: #67C198
    }
    &:hover {
        border-color: #B5D3C9
    }`;
};

const H5 = styled.h5`
    font-size: 14px;
    font-weight: lighter;
    color: ${colors.darkGrey};
    margin-bottom: 5px;
`;

const Default = styled.input`
    padding: 12px 8px;
    width: 100%;
    max-width: 400px;
    border-radius: 3px;
    border: 1px solid ${colors.lightGrey};
    font-size: 15px;
    border-radius: 3px;
    outline: none;
    ${props => valid(props.notValid)}
`;

const Input = ({ ...props }:Object) => {
    return (
        <div>
            <H5>{props.title}</H5>
            <Default
                type={props.type || 'text'}
                value={props.value}
                placeholder={props.placeholder}
                onChange={event => props.onChange(event.target.value)}
                notValid={props.notValid}
                onKeyDown={props.onKeyDown}
            />
        </div>
    );
};

Input.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    notValid: PropTypes.bool,
    onKeyDown: PropTypes.func
};

Input.defaultProps = {
    title: null,
    value: null,
    placeholder: null,
    type: null,
    notValid: false,
    onKeyDown: null
};

export default Input;
