// @flow
import React from 'react';
import styled from 'styled-components';
import { Default, style } from './styles';

const Squared = styled(Default)`
    color: #131517;
    border-radius: 3px;
    ${props => style(props.type)};
`;

type Props = {
    onClick: Function,
    text: string,
    type: ?string
}

export default ({ text, onClick, type }: Props) => {
    return (
        <Squared onClick={onClick} type={type}>
            {text}
        </Squared>
    );
};
