// @flow
import React from 'react';
import styled from 'styled-components';
import { Default, style } from './styles';

const Rounded = styled(Default)`
    border-radius: 999em;
    ${props => style(props.type)};
`;

type Props = {
    onClick: Function,
    text: string,
    icon: Function
}

export default ({ onClick, text, icon }:Props) => {
    return (
        <Rounded onClick={onClick}>
            {text}
            {icon}
        </Rounded>
    );
};
