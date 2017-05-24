// @flow
import React from 'react';
import styled from 'styled-components';

const Avatar = styled.img`
    cursor: pointer;
    height: 100%;
    width: 100%;
    border-radius: 999em;
    border: none;
    background-color: #ddd;
`;


type Props = {
    img?: string,
    size?: string
}

export default ({ img, size }:Props) => {
    const style = {
        height: size,
        width: size
    };
    return (<Avatar src={img} style={style} />);
};
