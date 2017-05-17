// @flow
import React from 'react';
import styled from 'styled-components';
import DotSpinner from '../DotSpinner';
import { Default, style } from './styles';

const Squared = styled(Default)`
    color: #131517;
    border-radius: 3px;
    min-height: 40px;
    min-width: 85px;
    ${props => style(props.type)};
`;

type Props = {
    onClick: Function,
    text: string,
    type: ?string,
    isLoading: bool
}

export default ({ text, onClick, type, isLoading }: Props) => {
    return (
        <Squared onClick={onClick} type={type}>
            {(isLoading) ? <DotSpinner /> : text}
        </Squared>
    );
};
