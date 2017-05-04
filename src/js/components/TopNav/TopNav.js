// @flow
import React, { Component } from 'react';
import Avatar from '../shared/Avatar';
import Menu from '../shared/Dropdown';
import { signOut } from '../../utils';
import logo from '../../../img/cuest-logo.png';
import CollectionIcon from '../../icons/collections';
import { RoundButton } from '../shared/Button';
import CollectionDialog from '../../containers/CollectionDialogContainer';
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
import type { DefaultProps, Props, State } from './types';

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
            picture: IMG,
            showDialog: false
        };
    }
    signOut = () => {
        const { router, logout } = this.props;
        if (logout) {
            logout()
                .then(() => {
                    signOut();
                    router.replace({
                        pathname: '/login'
                    });
                })
                .catch(err => console.log(err));
        }
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
    toCollections = () => {
        const { router } = this.props;
        this.onShow(false, 'collections');
        router.push('/');
    }
    renderCollections = () => {
        const { data: { groves, loading }, router } = this.props;

        if (loading || !groves) return null;

        // TODO: improve this later with better
        // recommendation e.g. created by
        // user
        return groves.map(collection =>
            <Item
                key={collection.id}
                onClick={() => router.push(`collection/${collection.id}`)}
            >
                {collection.name}
            </Item>
        ).slice(0, 3);
    }
    render() {
        const { data: { me } } = this.props;
        const { showSettings, showCollections, showDialog } = this.state;
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
                                {this.renderCollections()}
                                <All
                                    onClick={this.toCollections}
                                >
                                    View All Collections
                                </All>
                                <Add
                                    onClick={() => this.setState({
                                        showDialog: true,
                                        showCollections: false
                                    })}
                                >
                                    Add a Collection
                                </Add>
                            </Menu>
                        </Dropdown>
                    }
                </NavLeft>
                <NavCenter onClick={this.toCollections}>
                    <img
                        alt="logo"
                        src={logo}
                    />
                </NavCenter>
                <NavRight>
                    <RoundButton
                        onClick={() => {}}
                        text="Create Card"
                        type="secondary"
                    />
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
                {showDialog &&
                    <CollectionDialog
                        close={() => this.setState({ showDialog: false })}
                    />
                }
            </Container>
        );
    }
}

export default TopNav;
