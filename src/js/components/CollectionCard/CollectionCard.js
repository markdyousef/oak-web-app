// @flow
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import placeholder from '../../../img/collections-placeholder.svg';

const Container = styled.div`
    width: 320px;
    background: ${colors.white};
    padding: 16px;
    border: 1px solid ${colors.lightGrey};
    border-radius: 3px;
    height: 300px;
`;

const Image = styled.div`
    width: 288px;
    height: 200px;
    border-radius: 2px;
    border: 1px solid ${colors.lightGrey};
    background-color: ${colors.lightGrey};
    & img {
        width: 100%;
        height: 100%;
    }
`;

const Name = styled.h3`
    font-size: 15px;
    font-weight: normal;
    line-height: 1.48em;
    margin-bottom: 12px;
    color: ${colors.black};
    margin: 16px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Description = styled.p`
    font-size: 14px;
    color: ${colors.black};
    font-weight: 300;
    line-height: 1.54em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const CollectionCard = ({ name, description, picture }:Object) => {
    return (
        <Container>
            <Image>
                <img src={picture || placeholder} alt="cover" />
            </Image>
            <Name>{name}</Name>
            <Description>{description}</Description>
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
