// @flow
import React, { Component } from 'react';
import Menu from '../shared/Dropdown';
import Avatar from '../shared/Avatar';
import { signOut } from '../../utils';
import {
    NavRight,
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
        me?: {
            gravatar: string,
            avatar: Object
        }
    },
    router: {
        push?: (path: string) => void,
        replace?: (path: Object) => void
    },
    logout?: () => Promise<>
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
    toSettings = () => {
        const { router: { push } } = this.props;
        if (push) push('/my-settings');
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
                    <Profile onClick={() => this.setState({ isOpen: !isOpen })}>
                        <Avatar img={picture} />
                    </Profile>
                    {isOpen &&
                        <Dropdown style={{ right: '10px' }}>
                            <Menu onClose={() => this.setState({ isOpen: false})}>
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
