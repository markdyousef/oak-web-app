import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Avatar from '../shared/Avatar';

const Container = styled.nav`
    width: 100%;
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid ${colors.lightGrey};
    display: flex;
    justify-content: space-between;
    position: relative;
`;

const NavElemement = styled(Link)`
    height: 32px;
    width: 32px;
    border-radius: 999em;
    border: 1px solid #E5E5E5;
    margin-left: 5px;
`;

const NavRight = styled.div`
    height: 100%;
    align-self: flex-end;
    display: flex;
    align-items: center;
    padding-right: 20px;
`;

const NavLeft = styled.div`
    margin-left: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    width: 100px;
`;


const IMG = '//style.anu.edu.au/_anu/4/images/placeholders/person.png';
class TopNav extends Component {
    static propTypes = {
        team: PropTypes.bool
    }
    static defaultProps = {
        team: null
    }
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { team } = this.props;
        // differ between routes inside team and outside
        const settingsRoute = (team) ? '/my-settings' : 'settings';
        const profileRoute = (team) ? '/my-profile' : 'profile';
        return (
            <Container>
                <NavLeft>
                    {/* TODO: Search */}
                </NavLeft>
                <NavRight>
                    <NavElemement to={settingsRoute} />
                    <NavElemement to={profileRoute}>
                        <Avatar img={IMG} />
                    </NavElemement>
                </NavRight>
            </Container>
        );
    }
}

export default TopNav;
