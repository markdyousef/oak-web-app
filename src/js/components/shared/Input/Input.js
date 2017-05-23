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
    &:hover {
        border-color: #B5D3C9;
    }
    &:focus {
        border-color: #34b289;
    }
    &::placeholder {
        color: #b5b7b9;
    }
    &:focus::placeholder {
        color: #e1e1e1;
    }
    `;
};

const H5 = styled.h5`
    font-size: 13px;
    font-weight: lighter;
    color: rgba(19, 21, 23, 0.5);
    margin-bottom: 5px;
`;

const Default = styled.input`
    padding: 14px 10px;
    width: 100%;
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
