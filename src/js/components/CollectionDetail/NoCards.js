// @flow
import React from 'react';
import styled from 'styled-components';
import { SquareButton } from '../shared/Button';
import empty from '../../../img/cards-empty-state.svg';

const Container = styled.div`
    width: 60%;
    max-width: 400px;
    margin: auto;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & img {
        width: 40%;
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
        line-height: 1.4;
        text-align: center;
        padding: 20px 0;
        color: rgba(19, 21, 23, 0.5);
        max-width: 280px;
        width: 100%;
        margin: 0 auto;
    }
`;

const Empty = ({ onClick }:Object) => {
    return (
        <Container>
            <img src={empty} alt="empty state" />
            <p>Great, now that you have the collection, all you need is some posts.</p>
            <SquareButton
                text="Create a post"
                onClick={onClick}
                type="whiteLarge"
            />
        </Container>
    );
};

export default Empty;
