// @flow
import React, { Component } from 'react';
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
    cursor: pointer;
    padding-top: 5px;
    margin-top: 10px;
`;

type DefaultProps = {
    team: null,
    router: {}
};
type Props = {
    team: ?bool,
    logout: Function,
    router: {
        replace: Function
    },
    data: {
        loading: bool,
        me: {
            avatar: ?{
                urlThumb64: ?string
            },
            gravatar: ?string
        }
    }
};
type State = {
    isOpen: bool
};


const IMG = '//style.anu.edu.au/_anu/4/images/placeholders/person.png';
class TopNav extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps;
    props: Props;
    state: State;
    constructor() {
        super();
        this.state = {
            isOpen: false,
            picture: IMG
        };
    }
    signOut = () => {
        const { router, logout } = this.props;
        logout()
            .then(() => {
                signOut();
                router.replace({
                    pathname: '/login'
                });
            })
            .catch(err => console.log(err));
    }
    onClose = (close: bool = false) => {
        this.setState({ isOpen: close });
    }
    toSettings = () => {
        const { router } = this.props;
        this.onClose();
        router.push('/my-settings');
    }
    render() {
        const { data: { me } } = this.props;
        const { isOpen } = this.state;
        // differ between routes inside team and outside
        // const profileRoute = (team) ? '/my-profile' : 'profile';
        let picture;
        // prefer avatar over gravatar
        if (me && me.gravatar) picture = me.gravatar;
        if (me && me.avatar) picture = me.avatar.urlThumb64;

        return (
            <Container>
                <NavLeft>
                    {/* TODO: Search */}
                </NavLeft>
                <NavRight>
                    <Profile onClick={() => this.onClose(!isOpen)}>
                        <Avatar img={picture} />
                    </Profile>
                </NavRight>
                {isOpen &&
                    <Dropdown>
                        <Menu onClose={this.onClose}>
                            <Logout onClick={this.toSettings}>Settings</Logout>
                            <Logout onClick={this.signOut}>Logout</Logout>
                        </Menu>
                    </Dropdown>
                }
            </Container>
        );
    }
}

export default TopNav;
