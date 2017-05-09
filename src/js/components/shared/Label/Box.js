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
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    cursor: pointer;
    margin-top: 5px;
    & span {
        font-size: 15px;
        font-weight: normal;
        color: #000 !important;
    }

`;

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 22px;
    width: 22px;
    border-radius: 3px;
    margin-right: 5px;
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
    <Container onClick={onClick}>
        <Box style={style}>
            {isActive && <CheckIcon />}
        </Box>
        <span>{name}</span>
    </Container>
);
