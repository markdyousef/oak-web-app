// @flow
import React from 'react';
import styled from 'styled-components';
import Avatar from '../shared/Avatar';
import type { Creator } from './types';

const Container = styled.div`
    height: 54px;
    display: flex;
    align-items: center;
    margin-bottom: 32px;
`;

const Name = styled.h3`
    max-width: 500px;
    font-size: 20px;
    margin-left: 16px;
`;

type Props = {
    creator?: Creator
};

export default({ creator }: Props) => {
    let picture;
    // prefer avatar over gravatar
    if (creator && creator.gravatar) picture = creator.gravatar;
    if (creator && creator.avatar) picture = creator.avatar.urlThumb64;
    return (
        <Container>
            <Avatar img={picture} alt="author" size="54px" />
            <Name>{creator && creator.username}</Name>
        </Container>
    );
};
