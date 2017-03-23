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

const Default = styled.input`
    padding: 12px 8px;
    width: 100%;
    max-width: 300px;
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
            <Default
                type={props.type || 'text'}
                value={props.value}
                placeholder={props.placeholder}
                onChange={event => props.onChange(event.target.value)}
                notValid={props.notValid}
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
    notValid: PropTypes.bool
};

Input.defaultProps = {
    title: null,
    value: null,
    placeholder: null,
    type: null,
    notValid: false
};

export default Input;
