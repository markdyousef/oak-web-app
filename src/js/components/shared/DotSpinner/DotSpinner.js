import React from 'react';
import styled, { keyframes } from 'styled-components';

const progress = keyframes`
    0% {}
    50% {
    opacity: 0.3;
    transform: scale(1.2);
    }
    100% {}
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    :first-child {
        animation-delay: 0.27s;
    }
    :nth-child(2) {
        animation-delay: 0.63s;
    }
    :nth-child(3) {
        animation-delay: 0.81s;
    }
`;

const Bubbles = styled.div`
    animation: ${progress};
    animation-duration: 1.25s;
    animation-iteration-count: infinite;
    animation-direction: linear;
    background-color: #e8e8e8;
    height: 10px;
    margin-left: 5px;
    width: 10px;
    border-radius: 999em;
`;

export default ({ color }) => {
    let style;
    if (color === 'green') style = { backgroundColor: '#67C198' };
    if (color === 'white') style = { backgroundColor: '#fff' };
    return (
        <Container>
            <Bubbles style={style} />
            <Bubbles style={style} />
            <Bubbles style={style} />
        </Container>
    );
};
