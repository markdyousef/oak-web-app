// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import logo from '../../../img/cuest-logo.svg';
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

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
`;

const Left = styled.div`
    & img {
        margin-right: 5px;
        height: 28px;
    }
`;

const Right = styled.div`

`;

export default () => {
    return (
        <Container>
            <Left>
                <StyledLink to="login">
                    <img src={logo} alt="presentation" />
                </StyledLink>
            </Left>
            <Right>
            </Right>
        </Container>
    );
}
