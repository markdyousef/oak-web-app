// @flow
import React, { Component } from 'react';
import Menu from '../shared/Dropdown';
import Avatar from '../shared/Avatar';
import { signOut } from '../../utils';
import * as types from './contants';
import {
    NavRight,
    ProfileWrapper,
    Profile,
    Dropdown,
    MenuItem,
    NavContainer
} from './styles'

type DefaultProps = {
    data: Object
};

type Props = {
    data: {
        loading?: bool,
        me?: {
            gravatar: string,
            avatar: Object,
            id: string,
            name: string,
            username: string
        }
    },
    router: {
        push?: (path: string) => void,
        replace?: (path: Object) => void
    },
    logout?: () => Promise<>,
    trackEvent?: (type: string, action?: any) => void,
    setUser?: (user: Object) => void
};

type State = {
    isOpen: bool
};

export default class Settings extends Component<DefaultProps, Props, State> {
    static defaultProps = {
        data: {},
        router: {}
    };
    state = {
        isOpen: false
    }
    props: Props;
    toSettings = () => {
        const { router: { push } } = this.props;
        if (push) push('/my-settings');
    }
    componentWillReceiveProps(nextProps: Props) {
        const { data: { loading, me }, setUser } = nextProps;

        if (!loading && me && setUser) {
            setUser({
                id: me.id,
                name: me.name,
                username: me.username
            });
        }
    }
    signOut = () => {
        const { router: { replace }, logout } = this.props;
        if (logout && replace) {
            logout()
                .then(() => {
                    replace({
                        pathname: '/login'
                    });
                })
                .catch(err => console.log(err));
        }
        signOut();
    }
    onShow = () => {
        const { trackEvent } = this.props;
        const { isOpen } = this.state;

        // Analytics
        if (trackEvent) trackEvent(types.SHOW_SETTINGS, !isOpen);

        this.setState({ isOpen: !isOpen });
    }
    render() {
        const { data: { me } } = this.props;
        const { isOpen } = this.state;
        let picture;
        // prefer avatar over gravatar
        if (me && me.gravatar) picture = me.gravatar;
        if (me && me.avatar) picture = me.avatar.urlThumb64;
        return (
            <NavRight>
                <NavContainer>
                    <ProfileWrapper>
                        <Profile onClick={this.onShow}>
                            <Avatar img={picture} />
                        </Profile>
                    </ProfileWrapper>
                    {isOpen &&
                        <Dropdown style={{ right: '-6px', marginTop: '12px' }}>
                            <Menu onClose={this.onShow}>
                                <MenuItem onClick={this.toSettings}>Settings</MenuItem>
                                <MenuItem onClick={this.signOut}>Logout</MenuItem>
                            </Menu>
                        </Dropdown>
                    }
                </NavContainer>
            </NavRight>
        );
    }
}
