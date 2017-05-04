// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Avatar from '../shared/Avatar';
import Menu from '../shared/Dropdown';
import { signOut } from '../../utils';
import logo from '../../../img/cuest-logo.png';
import CollectionIcon from '../../icons/collections';
import { RoundButton } from '../shared/Button';
import CollectionDialog from '../../containers/CollectionDialogContainer';
import CreateCard from '../CreateCard';
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
            showAdd: false,
            picture: IMG,
            showDialog: false,
            collections: []
        };
    }
    componentWillReceiveProps(nextProps: Props) {
        const { data: { groves, loading } } = nextProps;

        if (loading || !groves) return;

        this.setState({
            collections: groves
        });
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
    renderRecommended = () => {
        const { router } = this.props;
        const { collections } = this.state;
        return collections.map(collection =>
            <Item
                key={collection.id}
                onClick={() => router.push(`collection/${collection.id}`)}
            >
                {collection.name}
            </Item>
        ).slice(0, 3);
    }
    addCard = (collectionId: string) => {
        const { router } = this.props;
        this.setState({ showAdd: false });
        return router.push(`/collection/${collectionId}/card`);
    }
    render() {
        const { data: { me }, params } = this.props;
        const { showSettings, showCollections, showDialog, showAdd, collections } = this.state;
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
                        <Dropdown style={{ left: '10px' }}>
                            <Menu onClose={() => this.onShow(false, 'collections')} arrowPos="left">
                                <ItemTitle>YOUR TOP COLLECTIONS</ItemTitle>
                                {this.renderRecommended()}
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
                        onClick={() => this.setState({ showAdd: !showAdd })}
                        text="Create Card"
                        type="secondary"
                    />
                    {showAdd &&
                        <Dropdown style={{ right: '10px' }}>
                            <Menu onClose={() => this.setState({ showAdd: false })}>
                                <CreateCard
                                    collectionId={params.collectionId}
                                    collections={collections}
                                    addCard={collectionId => this.addCard(collectionId)}
                                />
                            </Menu>
                        </Dropdown>
                    }
                    <Profile onClick={() => this.onShow(!showSettings, 'settings')}>
                        <Avatar img={picture} />
                    </Profile>
                    {showSettings &&
                        <Dropdown style={{ right: '10px' }}>
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

export default withRouter(TopNav);
