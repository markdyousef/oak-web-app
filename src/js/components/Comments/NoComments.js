// @flow
import React from 'react';
import styled from 'styled-components';
import empty from '../../../img/no-comments.svg';

const Container = styled.div`
    width: 100%;
    max-width: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-top: 48px;
    & img {
        width: 100%;
        max-width: 180px;
        margin: 0 auto;
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
        line-height: 1.4;
        text-align: center;
        padding: 24px 0;
        color: rgba(19, 21, 23, 0.5);
    }
`;

const Empty = () => {
    return (
        <Container>
            <img src={empty} alt="empty state" />
            <p>Be the first to write a comment<br /> to this post.</p>
        </Container>
    );
};

export default Empty;
