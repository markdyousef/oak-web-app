// @flow
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import placeholder from '../../../img/collections-placeholder.svg';

const Container = styled.div`
    width: 320px;
    background: ${colors.white};
    padding: 30px;
    border: 1px solid ${colors.lightGrey};
    border-radius: 3px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    &:hover {
        background: #fafafa;
    }
    &:active {
        background: #f7f7f7;
    }
`;

const Name = styled.h3`
    font-size: 24px;
    font-weight: normal;
    line-height: 1.48em;
    margin-bottom: 12px;
    color: ${colors.black};
    margin: 16px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 224px;
`;

const Description = styled.p`
    font-size: 14px;
    color: ${colors.black};
    font-weight: 300;
    line-height: 1.54em;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-height: 3.2em;
`;

const Creator = styled.img`
    position: absolute;
    bottom: 16px;
    right: 16px;
    height: 24px;
    width: 24px;
    border-radius: 99em;
`;

const CollectionCard = ({ name, description, picture }:Object) => {
    console.log(picture);
    return (
        <Container>
            <Name>{name}</Name>
            <Description>{description}</Description>
            {picture && <Creator src={picture} alt="creator" />}
        </Container>
    );
};

CollectionCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    picture: PropTypes.string
};

CollectionCard.defaultProps = {
    description: null,
    picture: null
};

export default CollectionCard;
