// @flow
import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
`;

const Image = styled.img`
    max-width: 400px;
`;

const ImageBlock = ({ data }:Object) => {
    return (
        <div>
            <Container>
                <Image role="presentation" src={data.src} />
            </Container>
        </div>
    );
};

ImageBlock.propTypes = {
    data: PropTypes.shape({
        src: PropTypes.string
    }).isRequired
};

export default ImageBlock;
