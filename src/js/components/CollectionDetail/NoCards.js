// @flow
import React from 'react';
import styled from 'styled-components';
import { SquareButton } from '../shared/Button';
import empty from '../../../img/cards-empty-state.svg';

const Container = styled.div`
    width: 60%;
    max-width: 400px;
    margin: auto;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & img {
        width: 60%;
    }
    & h2 {
        font-size: 20px;
        font-weight: lighter;
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 40px;
    }
    & p {
        font-size: 15px;
        line-height: 24px;
        text-align: center;
        margin: 20px 0;
    }
`;

const Empty = ({ onClick }:Object) => {
    return (
        <Container>
            <h2>Cards</h2>
            <img src={empty} alt="empty state" />
            <p>A collection is much better with some cards!</p>
            <SquareButton
                text="Create a card"
                onClick={onClick}
            />
        </Container>
    );
};

export default Empty;
