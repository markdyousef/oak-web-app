// @flow
import React from 'react';
import styled from 'styled-components';
import CheckIcon from '../../../icons/checkmark';
import { colors } from '../../../styles';

const Container = styled.div`
    width: 100%;
    ${''/* padding: 0 10px; */}
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 12px;
    & span {
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 15px;
        font-weight: normal;
        color: #131517 !important;
        max-width: 120px;
    }
    &:last-child {
        margin-bottom: 0;
    }

`;

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 22px;
    width: 22px;
    border-radius: 3px;
    margin-right: 8px;
    & svg {
        fill: ${colors.white};
        height: 12px;
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
