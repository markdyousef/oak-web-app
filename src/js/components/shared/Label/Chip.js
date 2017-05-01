// @flow
import React from 'react';
import styled from 'styled-components';
import CheckIcon from '../../../icons/checkmark';
import { colors } from '../../../styles';

const Label = styled.div`
    width: 100%;
    height: 30px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 1px;
    font-size: 14px;
    color: #fff;
    word-wrap: break-word;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 5px;
    cursor: pointer;
    & svg {
        fill: ${colors.white}
    }
`;

type Props = {
    onClick: () => void,
    style: ?Object,
    name: string,
    isActive?: bool
}

export default ({ onClick, style, name, isActive }: Props) => (
    <Label
        onClick={onClick}
        style={style}
    >
        {name}
        {isActive && <CheckIcon />}
    </Label>
);
