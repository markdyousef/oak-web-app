// @flow
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../../styles/colors';

const style = (type) => {
    if (type === 'primary') {
        return `
            background-color: ${colors.green};
            border-color: ${colors.green};
            color: ${colors.white};
            &:active {
                background-color: #57B188
            }
            &:hover {
                border-color: ${colors.green}
            }`;
    }
    if (type === 'alarm') {
        return `
            background-color: #E87385;
            border-color: #E87385;
            color: ${colors.white};
            &:active {
                background-color: #D95D70
            }
            &:hover {
                border-color: #E87385
            }`;
    }
    return null;
};

const Default = styled.button`
    border: 1px solid ${colors.lightGrey};
    font-size: 14px;
    background-color: ${colors.white};
    padding: 8px 24px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    &:active {
        background-color: ${colors.lightGrey}
    }
    &:hover {
        border-color: ${colors.grey}
    }
`;

const Squared = styled(Default)`
    color: #131517;
    border-radius: 3px;
    ${props => style(props.type)};
`;

const Rounded = styled(Default)`
    border-radius: 999em;
    ${props => style(props.type)};
`;

const Button = ({ ...props }: Object) => {
    if (props.rounded) {
        return (
            <Rounded
                onClick={props.onClick}
                type={props.type}
            >
                {props.text}
            </Rounded>
        );
    }
    return (
        <Squared
            onClick={props.onClick}
            type={props.type}
        >
            {props.text}
        </Squared>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    rounded: PropTypes.bool
};

Button.defaultProps = {
    type: null,
    rounded: false
};

export default Button;
