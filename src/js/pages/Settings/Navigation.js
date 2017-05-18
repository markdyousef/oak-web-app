// @lfow
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const Container = styled.nav`
    width: 100%;
    height: 100%;
`;

const NavGroup = styled.div`
    margin-bottom: 48px;
    & h3 {
        font-size: 20px;
        line-height: 24px;
        color: ${props => props.active ? colors.black : colors.fadedGrey};
        margin-bottom: 8px;
        font-weight: bold;
    }
    & h5 {
        font-size: 14px;
        line-height: 17px;
        color: ${props => props.active ? colors.black : colors.fadedGrey};
        margin-bottom: 12px;
    }
    & button {
        font-size: 15px;
        padding: 0;
        border: none;
        background-color: transparent;
        cursor: pointer;
        color: ${colors.green}
    }
`;

const Navigation = ({ activeSection, onSelect }:Object) => {
    return (
        <Container>
            <NavGroup active={activeSection === 0}>
                <h3>Profile</h3>
                <h5>Change your name, @username and profile pic</h5>
                <button onClick={() => onSelect(0)}>Edit profile information</button>
            </NavGroup>
            <NavGroup active={activeSection === 1}>
                <h3>Account</h3>
                <h5>Change your email address and password</h5>
                <button onClick={() => onSelect(1)}>Edit account information</button>
            </NavGroup>
            {/* <NavGroup active={activeSection === 2}>
                <h3>Cancel Account</h3>
                <h5>Chang your Full Name and/or @username.</h5>
                <button>Edit profile information</button>
            </NavGroup> */}
        </Container>
    );
};

Navigation.propTypes = {
    activeSection: PropTypes.number.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default Navigation;
