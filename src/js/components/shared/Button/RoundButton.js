// @flow
import React from 'react';
import styled from 'styled-components';
import DotSpinner from '../DotSpinner';
import { Default, style } from './styles';

const Rounded = styled(Default)`
    border-radius: 999em;
    font-weight: normal;
    padding: 8px 16px;
    margin-right: 8px;
    ${props => style(props.type)};
    &:hover {
        color: #fff;
        background: #34B289;
    }
    &:active {
        background: #249E76;
        border: 1px solid #249E76;
    }
`;

type Props = {
    onClick: Function,
    text: string,
    icon: Function,
    type: ?string,
    isLoading: bool
}

export default ({ onClick, text, icon, type, isLoading }:Props) => {
    return (
        <Rounded onClick={onClick} type={type}>
            {(isLoading) ? <DotSpinner /> : text}
            {icon}
        </Rounded>
    );
};
