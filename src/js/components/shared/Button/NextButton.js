// @flow
import React from 'react';
import styled from 'styled-components';
import colors from '../../../styles/colors';

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${colors.green};
    border-radius: 3px;
    border: 1px solid ${colors.green};
    color: ${colors.white};
    font-size: 15px;
    font-weight: bold;
    padding: 12px;
    cursor: pointer;
    &:hover {
        box-shadow: inset 0 -2px rgba(0, 0, 0, 0.15);
        transition: 0.2s;
    }
    &:after {
        box-shadow: inset 0 -2px rgba(0, 0, 0, 0.15);
        transition: 0.2s;
    }
    & svg {
        fill: ${colors.white};
        margin-left: 5px;
    }
`;

type Props = {
    onClick: Function,
    text: string,
    icon: Function
}

export default ({ onClick, text, icon }:Props) => {
    return (
        <Button onClick={onClick}>
            {text}
            {icon}
        </Button>
    );
};
