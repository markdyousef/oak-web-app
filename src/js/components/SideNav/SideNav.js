// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import colors from '../../styles/colors';
import claiLogo from '../../../img/clai-logo.png';
// import HomeIcon from '../../icons/home';
import CollectionIcon from '../../icons/collections';

const Container = styled.nav`
    max-width: 230px;
    width: 100%;
    background-color: ${colors.darkGrey};
    display: flex;
    flex-direction: column;
    align-items: baseline;
    height: 100%;
    height: 100vh;
    position: relative;
    z-index: 10;
`;

const Team = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 16px;
`;

const TeamPic = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 999em;
`;

const TeamName = styled.h1`
    color: ${colors.white};
    margin-left: 8px;
    font-weight: bold;
    font-size: 16px;
`;

const Nav = styled.section`
    margin-top: 24px;
    width: 100%;
`;
const StyledLink = styled(Link)`
    display: block;
    margin-bottom: 16px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 15px;
    border-left: 3px solid ${colors.darkGrey};
    padding-left: 16px
`;

const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    & svg {
        margin-right: 8px;
        fill: ${colors.white};
    }
`;

const SubLink = styled(StyledLink)`
    margin: 14px;
    padding-left: 35px !important;
    /*width: 100%;*/
`;

export const Loading = styled.div`
    background-color: #393F43;
    height: 12px;
    width: ${props => props.width}%;
    border-radius: 2px;
`;

type Grove = {
    name: string,
    id: string
}
type DefaultProps = {};
type Props = {
    setUpdate: (update: bool) => void,
    shouldUpdate: bool,
    data: {
        loading: bool,
        groves?: Array<Grove>,
        refetch: Function
    }
};
type State = {};

class SideNav extends Component<DefaultProps, Props, State> {
    static defaultProps:DefaultProps;
    props: Props;
    state: State;
    constructor() {
        super();
        this.state = {};
    }
    componentWillReceiveProps(nextProps: Props) {
        const { data } = this.props;
        if (nextProps.shouldUpdate && !data.loading) {
            data.refetch();
            nextProps.setUpdate(false);
        }
    }
    renderSubCategories = () => {
        const { data: { loading, groves } } = this.props;
        const loadingCategories = 6;

        if (loading) {
            return (
                <div>
                    {[...Array(loadingCategories).keys()]
                        .map(item => (
                            <SubLink key={item + 'loading'}>
                                <Loading
                                    width={(Math.random() * (80 - 50)) + 50}
                                />
                            </SubLink>
                        ))
                    }
                </div>
            );
        }

        if (!loading && groves) {
            return (
                <div>
                    {groves.map(category => (
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
                    {/* <StyledLink
                        // to="/"
                        activeStyle={{ color: colors.white, borderColor: colors.green }}
                    >
                        <LinkWrapper><HomeIcon /><h1>Home</h1></LinkWrapper>
                    </StyledLink> */}
                    <StyledLink
                        to="/"
                        activeStyle={{ color: colors.white, borderColor: colors.green }}
                    >
                        <LinkWrapper><CollectionIcon /><h1>Collections</h1></LinkWrapper>
                    </StyledLink>
                    {this.renderSubCategories()}
                    {/* <StyledLink
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
                    </StyledLink> */}
                </Nav>
            </Container>
        );
    }
}

export default SideNav;
