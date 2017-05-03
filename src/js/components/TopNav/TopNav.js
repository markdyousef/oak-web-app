// @flow
import React, { Component } from 'react';
import Avatar from '../shared/Avatar';
import Menu from '../shared/Dropdown';
import { signOut } from '../../utils';
import logo from '../../../img/cuest-logo.png';
import CollectionIcon from '../../icons/collections';
import {
    Container,
    Profile,
    NavRight,
    NavLeft,
    NavCenter,
    Dropdown,
    Collections,
    Item,
    ItemTitle,
    All,
    Add
} from './styles';

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
    showSettings: bool,
    showCollections: bool
};


const IMG = '//style.anu.edu.au/_anu/4/images/placeholders/person.png';
class TopNav extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps;
    props: Props;
    state: State;
    constructor() {
        super();
        this.state = {
            showSettings: false,
            showCollections: false,
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
    onShow = (close: bool = false, menu?: string) => {
        if (menu === 'collections') {
            this.setState({ showCollections: close });
            return;
        }
        this.setState({ showSettings: close });
    }
    toSettings = () => {
        const { router } = this.props;
        this.onShow();
        router.push('/my-settings');
    }
    render() {
        const { data: { me }, router } = this.props;
        const { showSettings, showCollections } = this.state;
        // differ between routes inside team and outside
        // const profileRoute = (team) ? '/my-profile' : 'profile';
        let picture;
        // prefer avatar over gravatar
        if (me && me.gravatar) picture = me.gravatar;
        if (me && me.avatar) picture = me.avatar.urlThumb64;

        return (
            <Container>
                <NavLeft>
                    <CollectionIcon />
                    <Collections onClick={() => this.onShow(!showCollections, 'collections')}>
                        Collections
                    </Collections>
                    {showCollections &&
                        <Dropdown style={{ left: '5px' }}>
                            <Menu onClose={() => this.onShow(false, 'collections')} arrowPos="left">
                                <ItemTitle>YOUR TOP COLLECTIONS</ItemTitle>
                                <Item>Collection</Item>
                                <Item>Collection</Item>
                                <Item>Collection</Item>
                                <All>View All Collections</All>
                                <Add>Add a Collection</Add>
                            </Menu>
                        </Dropdown>
                    }
                </NavLeft>
                <NavCenter onClick={() => router.push('/')}>
                    <img
                        alt="logo"
                        src={logo}
                    />
                </NavCenter>
                <NavRight>
                    <Profile onClick={() => this.onShow(!showSettings, 'settings')}>
                        <Avatar img={picture} />
                    </Profile>
                    {showSettings &&
                        <Dropdown style={{ right: '5px' }}>
                            <Menu onClose={this.onShow}>
                                <Item onClick={this.toSettings}>Settings</Item>
                                <Item onClick={this.signOut}>Logout</Item>
                            </Menu>
                        </Dropdown>
                    }
                </NavRight>
            </Container>
        );
    }
}

export default TopNav;
