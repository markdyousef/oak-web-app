// @flow
import React, { Component } from 'react';
import CollectionDialog from '../../containers/CollectionDialogContainer';
import ArrowDown from '../../icons/arrowDown';
import AddCollection from '../../icons/add';
import AllIcon from '../../icons/collections';
import Menu from '../shared/Dropdown';
import logo from '../../../img/cuest-icon.svg';
import * as types from './contants';
import {
    NavLeft,
    CollectionWrapper,
    Collections,
    ArrowWrapper,
    Dropdown,
    MenuTitle,
    MenuItem,
    Divider,
    All,
    Add,
    Logowrapper,
    Logo,
    ActiveMenu,
    NavContainer
} from './styles';


type DefaultProps = {
    router: Object,
    params: Object,
    data: Object
}

type Props = {
    data: {
        groves?: Array<Object>
    },
    router: {
        push?: (path: string) => void
    },
    params: {
        collectionId?: string
    },
    trackEvent?: (type: string, action?: any) => void,
    trackModal?: (type: string) => void
};

type State = {
    showCollections: bool,
    showDialog: bool
};

export default class MainNav extends Component<DefaultProps, Props, State> {
    static defaultProps = {
        router: {},
        params: {},
        data: {}
    }
    props: Props;
    state = {
        showCollections: false,
        showDialog: false
    };
    toCollections = () => {
        const { router: { push } } = this.props;
        if (push) push('/');
        this.setState({ showCollections: false });
    }
    goToCollection = (id:string) => {
        const { router: { push }, trackEvent } = this.props;

        if (trackEvent) trackEvent(types.COLLECTION);

        if (push) push(`collection/${id}`);
    }
    renderRecommended = () => {
        const { data } = this.props;

        const collections = (data && data.groves) ? data.groves : [];

        return collections.map(collection =>
            (<MenuItem
                key={collection.id}
                onClick={() => {
                    this.goToCollection(collection.id);
                    this.setState({ showCollections: false });
                }}
            >
                {collection.name}
            </MenuItem>)
        ).slice(0, 3);
    }
    activeCollection = () => {
        const {
            params: { collectionId },
            data: { groves }
        } = this.props;

        if (!groves) return null;
        if (!collectionId) return null;

        const activeIndex = groves.findIndex(
            (grove => grove.id === collectionId));

        const { name } = groves[activeIndex];
        return (
            <ActiveMenu
                onClick={() => this.goToCollection(collectionId)}
            >
                {name}
            </ActiveMenu>
        );
    }
    showCollections = () => {
        const { trackEvent } = this.props;
        const { showCollections } = this.state;
        // Analytics
        if (trackEvent) trackEvent(types.SHOW_COLLECTIONS, !showCollections);

        this.setState({ showCollections: !showCollections });
    }
    showDialog = () => {
        const { trackEvent, trackModal } = this.props;

        // Analytics
        if (trackEvent && trackModal) {
            trackEvent(types.SHOW_COLLECTIONS, false);
            trackModal(types.CREATE_COLLECTION);
        }

        this.setState({
            showDialog: true,
            showCollections: false
        });
    }
    render() {
        const { showCollections, showDialog } = this.state;
        return (
            <NavLeft>
                <Logowrapper onClick={this.toCollections}>
                    <Logo>
                        <img
                            alt="logo"
                            src={logo}
                        />
                    </Logo>
                </Logowrapper>
                <NavContainer>
                    <CollectionWrapper onClick={this.showCollections}>
                        <Collections>
                            Collections
                            </Collections>
                        <ArrowWrapper>
                            <ArrowDown />
                        </ArrowWrapper>
                    </CollectionWrapper>
                    {showCollections &&
                    <Dropdown>
                        <Menu onClose={this.showCollections} arrowPos="left">
                            <MenuTitle>Your top collections</MenuTitle>
                            {this.renderRecommended()}
                            <Divider />
                            <All
                                onClick={this.toCollections}
                            >
                                <AllIcon />
                                    View all collections
                                </All>
                            <Add
                                onClick={this.showDialog}
                            >
                                <AddCollection />
                                        Add a collection
                                    </Add>
                        </Menu>
                    </Dropdown>
                                }
                    {this.activeCollection()}
                </NavContainer>
                {showDialog &&
                    <CollectionDialog
                        close={() => this.setState({ showDialog: false })}
                    />
                }
            </NavLeft>
        );
    }
}
