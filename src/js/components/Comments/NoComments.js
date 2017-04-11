// @flow
import React from 'react';
import styled from 'styled-components';
import empty from '../../../img/comments-empty-state.svg';

const Container = styled.div`
    width: 90%;
    max-width: 400px;
    margin: auto;
    margin-top: 80px;
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
        margin-bottom: 20px;
    }
    & p {
        font-size: 15px;
        line-height: 24px;
        text-align: center;
        margin: 20px 0;
    }
`;

const Empty = () => {
    return (
        <Container>
            <h2>Comments</h2>
            <img src={empty} alt="empty state" />
            <p>None of your teammates has commented on this card yet. Be the first! </p>
        </Container>
    );
};

export default Empty;
