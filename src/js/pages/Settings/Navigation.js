// @lfow
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const Container = styled.nav`
    width: 100%;
    max-width: 220px;
    max-height: 580px;
`;

const NavGroup = styled.div`
    margin-bottom: 40px;
    & h3 {
        font-size: 20px;
        line-height: 24px;
        color: ${props => props.active ? colors.black : colors.grey};
        margin-bottom: 12px;

    }
    & h5 {
        font-size: 14px;
        line-height: 17px;
        color: ${props => props.active ? colors.black : colors.grey};
        margin-bottom: 16px;
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
                <h5>Chang your Full Name and/or @username.</h5>
                <button>Edit profile information</button>
            </NavGroup>
            <NavGroup active={activeSection === 1}>
                <h3>Profile Pic</h3>
                <h5>Edit your profile pic to change the way you look on Cuest.</h5>
                <button>Edit profile pic</button>
            </NavGroup>
            <NavGroup active={activeSection === 2}>
                <h3>Profile</h3>
                <h5>Chang your Full Name and/or @username.</h5>
                <button>Edit profile information</button>
            </NavGroup>
            <NavGroup active={activeSection === 3}>
                <h3>Profile</h3>
                <h5>Chang your Full Name and/or @username.</h5>
                <button>Edit profile information</button>
            </NavGroup>
        </Container>
    );
};

Navigation.propTypes = {
    activeSection: PropTypes.number.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default Navigation;
