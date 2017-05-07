// @flow
import React from 'react';
import styled from 'styled-components';
import DotSpinner from '../DotSpinner';
import { Default, style } from './styles';

const Rounded = styled(Default)`
    border-radius: 999em;
    ${props => style(props.type)};
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
