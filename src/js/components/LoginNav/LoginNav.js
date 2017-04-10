// @flow
import React from 'react';
import styled from 'styled-components';
import name from '../../../img/cuest.png';
import logo from '../../../img/cuest-logo.png';
import colors from '../../styles/colors';

const Container = styled.nav`
    display: flex;
    width: 100%;
    height: 60px;
    background-color: ${colors.white};
    position: fixed;
    align-items: center;
    padding: 0 100px;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.lightGrey};
    & div {
        display: flex;
        align-items: center;
    }
`;

const Left = styled.div`
    & img {
        margin-right: 5px;
    }
`;

const Right = styled.div`

`;

export default () => {
    return (
        <Container>
            <Left>
                <img src={logo} alt="presentation" />
                <img src={name} alt="presentation" />
            </Left>
            <Right>
            </Right>
        </Container>
    );
}
