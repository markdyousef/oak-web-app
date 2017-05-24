// @flow
import React from 'react';
import styled from 'styled-components';
import CheckIcon from '../../../icons/checkmark';
import { colors } from '../../../styles';

const Container = styled.div`
    width: 100%;
    display: block;
    align-items: center;
    cursor: pointer;
    margin-bottom: 12px;
    position: relative;
    z-index: 1;
    padding-left: 20px;
    padding-right: 6px;
    &:first-child {
        margin-top: 20px;
    }
    &:hover:before {
        content: '';
        background: #f2f2f2;
        border-radius: 3px;
        padding: 4px 8px;
        color: #fff;
        position: absolute;
        margin: -6px -8px;
        width: calc(100% - 12px);
        height: 34px;
        z-index: -1;
    }
    & span {
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 16px;
        font-weight: normal;
        color: #131517 !important;
        max-width: 120px;
        vertical-align: middle;
        display: inline-block;
    }
    &:last-child {
        padding-bottom: 20px;
        margin-bottom: 0;
    }
`;

const Box = styled.div`
    display: inline-block;
    vertical-align: middle;
    height: 22px;
    width: 22px;
    border-radius: 3px;
    margin-right: 8px;
    & svg {
        fill: ${colors.white};
        height: 12px;
        margin-left: 3px;
        margin-top: 5px;
    }
`;

type Props = {
    onClick: () => void,
    style: ?Object,
    name: string,
    isActive?: bool
}

export default ({ onClick, style, name, isActive }: Props) => (
    <Container onClick={onClick}>
        <Box style={style}>
            {isActive && <CheckIcon />}
        </Box>
        <span>{name}</span>
    </Container>
);
