// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import colors from '../../styles/colors';
import claiLogo from '../../../img/clai-logo.png';

const Container = styled.nav`
    max-width: 230px;
    width: 100%;
    background-color: #2D3438;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    height: 100%;
    padding-top: 16px;
    height: 100vh;
    position: relative;
    z-index: 1;
`;

const Team = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 16px;
`;

const TeamPic = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 999em;
`;

const TeamName = styled.h1`
    color: ${colors.white};
    margin-left: 8px;
`;

const Nav = styled.section`
    margin-top: 24px;
`;
const StyledLink = styled(Link)`
    display: block;
    margin-bottom: 16px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 15px;
    border-left: 3px solid #2D3438;
    padding-left: 16px;
`;

const SubLink = styled(StyledLink)`
    margin: 14px;
`;

class SideNav extends Component {
    static propTypes = {
        data: PropTypes.shape({
            loading: PropTypes.bool,
            groves: PropTypes.arrayOf(PropTypes.shape({
                name: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired
            }))
        }).isRequired
    };
    static defaultProps = {};
    constructor() {
        super();
        this.state = {};
    }
    renderSubCategories = () => {
        const { data } = this.props;

        if (data.loading) return null;

        if (!data.loading && data.groves) {
            return (
                <div>
                    {data.groves.map(category => (
                        <div key={category.id}>
                            <SubLink
                                to={`collection/${category.id}`}
                                activeStyle={{ color: colors.white }}
                            >
                                {category.name}
                            </SubLink>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    }
    render() {
        return (
            <Container>
                <Team>
                    <TeamPic src={claiLogo} alt="team logo" />
                    <TeamName>Clai</TeamName>
                </Team>
                <Nav>
                    <StyledLink
                        // to="/"
                        activeStyle={{ color: colors.white, borderColor: colors.green }}
                    >
                        <teamStats />
                        <h1>Home</h1>
                    </StyledLink>
                    <StyledLink
                        to="/"
                        activeStyle={{ color: colors.white, borderColor: colors.green }}
                    >
                        <div />
                        <h1>Collections</h1>
                    </StyledLink>
                    {this.renderSubCategories()}
                    <StyledLink
                        // to="/"
                        activeStyle={{ color: colors.white, borderColor: colors.green }}
                    >
                        <div />
                        <h1>Scoreboards</h1>
                    </StyledLink>
                    <StyledLink
                        // to="/"
                        activeStyle={{ color: colors.white, borderColor: colors.green }}
                    >
                        <div />
                        <h1>Toolset</h1>
                    </StyledLink>
                </Nav>
            </Container>
        );
    }
}

export default SideNav;
