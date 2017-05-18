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
    font-size: 16px;
    font-weight: bold;
    padding: 12px;
    cursor: pointer;
    &:hover {
        color: #fff;
        background: #34B289;
    }
    &:active {
        background: #249E76;
        border: 1px solid #249E76;
    }
    & svg {
        fill: ${colors.white};
        margin-left: 6px;
        height: 14px;
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
