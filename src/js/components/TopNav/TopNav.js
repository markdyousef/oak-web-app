import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Avatar from '../shared/Avatar';
import Menu from '../shared/Dropdown';
import { signOut } from '../../utils';

const Container = styled.nav`
    width: 100%;
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid ${colors.lightGrey};
    display: flex;
    justify-content: space-between;
    position: relative;
    flex-shrink: 0;
`;

const Profile = styled.button`
    height: 32px;
    width: 32px;
    border-radius: 999em;
    border: 1px solid #E5E5E5;
    margin-left: 5px;
    padding: 0;
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

const Dropdown = styled.div`
    top: 60px;
    right: 5px;
    position: absolute;
    width: 200px;
    z-index: 99;
`;

const Logout = styled.div`
    width: 100%;
    border-top: 1px solid #efefef;
    cursor: pointer;
    padding-top: 5px;
    margin-top: 10px;
`;


const IMG = '//style.anu.edu.au/_anu/4/images/placeholders/person.png';
class TopNav extends Component {
    static propTypes = {
        router: PropTypes.shape({
            replace: PropTypes.func
        }),
        team: PropTypes.bool,
        data: PropTypes.shape({
            loading: PropTypes.bool,
            avatar: PropTypes.object
        }).isRequired
    }
    static defaultProps = {
        team: null,
        router: null
    }
    constructor() {
        super();
        this.state = {
            isOpen: false,
            picture: IMG
        };
    }
    componentWillReceiveProps(nextProps) {
        const { data } = nextProps;

        if (data.loading) return;

        const { avatar } = data.me;
        const picture = (avatar.urlThumb64) ? avatar.urlThumb64 : IMG;
        this.setState({ picture })
    }
    signOut = () => {
        const { router } = this.props;
        signOut();
        router.replace({
            pathname: '/login'
        })
    }
    render() {
        const { team } = this.props;
        const { isOpen, picture } = this.state;
        // differ between routes inside team and outside
        const settingsRoute = (team) ? '/my-settings' : 'settings';
        // const profileRoute = (team) ? '/my-profile' : 'profile';
        return (
            <Container>
                <NavLeft>
                    {/* TODO: Search */}
                </NavLeft>
                <NavRight>
                    <Profile onClick={() => this.setState({ isOpen: !isOpen })}>
                        <Avatar img={picture} />
                    </Profile>
                </NavRight>
                {isOpen &&
                    <Dropdown>
                        <Menu>
                            {/* <Link to={profileRoute}>
                                Profile
                            </Link> */}
                            <Link to={settingsRoute}>
                                Settings
                            </Link>
                            <Logout onClick={this.signOut}>Logout</Logout>
                        </Menu>
                    </Dropdown>
                }
            </Container>
        );
    }
}

export default TopNav;
