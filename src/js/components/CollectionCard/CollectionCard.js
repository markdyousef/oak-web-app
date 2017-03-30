// @flow
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const Container = styled.div`
    width: 320px;
    background: ${colors.white};
    padding: 16px;
    border: 1px solid ${colors.lightGrey};
    border-radius: 3px;
`;

const Image = styled.div`
    width: 288px;
    height: 200px;
    border-radius: 2px;
    border: 1px solid ${colors.lightGrey};
    background-color: ${colors.lightGrey};
`;

const Name = styled.h3`
    font-size: 15px;
    font-weight: normal;
    line-height: 1.48px;
    margin-bottom: 12px;
    color: ${colors.black}
    margin: 16px 0 12px;
`;

const Description = styled.p`
    font-size: 14px;
    color: ${colors.black};
    font-weight: 300;
    line-height: 1.54px;
`;

const CollectionCard = ({ name, description, image }:Object) => {
    return (
        <Container>
            <Image />
            <Name>{name}</Name>
            <Description>{description}</Description>
        </Container>
    );
};

CollectionCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string
};

CollectionCard.defaultProps = {
    description: null,
    image: null
};

export default CollectionCard;
