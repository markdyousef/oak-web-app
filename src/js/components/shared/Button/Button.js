// @flow
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../../styles/colors';

const Default = styled.button`
    border: 1px solid ${colors.lightGrey};
    font-size: 14px;
    background-color: ${colors.white};
    padding: 8px 24px;
    font-weight: bold;
    &:focus {
        outline: none;
    }
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
`;

const Rounded = styled(Default)`
    border-radius: 999em;
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
    rounded: PropTypes.string
};

Button.defaultProps = {
    type: null,
    rounded: false
};

export default Button;
