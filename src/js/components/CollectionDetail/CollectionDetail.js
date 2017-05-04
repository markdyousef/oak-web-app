// @flow
import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import Card from '../Card';
import { SquareButton } from '../shared/Button';
import DotSpinner from '../shared/DotSpinner';
import CollectionDialog from '../../containers/CollectionDialogContainer';
import NoCards from './NoCards';
import CollectionToolbar from '../CollectionToolbar';
import Menu from '../shared/Dropdown';

import type { DefaultProps, Props, State } from './types';

import {
    Container,
    Header,
    Info,
    Stats,
    ButtonGroup,
    Grid,
    masonStyles,
    Loading,
    DropdownContainer,
    Dropdown,
    MenuItem
} from './styles';

class CollectionDetail extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps;
    props: Props;
    state: State;
    constructor() {
        super();
        this.state = {
            showEdit: false,
            showDetail: false,
            cards: [],
            sortKey: 'date',
            labels: [],
            filterVals: []
        };
    }
    componentWillReceiveProps(nextProps:Props) {
        const {
            shouldUpdate,
            setUpdate,
            data: { loading, seeds, grove, refetch }
        } = nextProps;
        if (shouldUpdate) {
            refetch();
            setUpdate('card', false);
        }

        if (loading) return;

        if (seeds) {
            this.setState({ cards: seeds, sortKey: 'date' });
        }
        if (grove && grove.labels) {
            this.setState({ labels: grove.labels });
        }
    }
    onFilter = (key:string) => {
        const { filterVals, cards } = this.state;
        const { seeds } = this.props.data;
        let newFilters = filterVals;
        const active = filterVals.indexOf(key);
        if (active > -1) {
            newFilters = filterVals.filter(id => id !== key);
        } else {
            newFilters.push(key);
        }
        let filteredCards = seeds;
        if (newFilters.length > 0) {
            filteredCards = cards
                .filter((card) => {
                    if (card.labels) {
                        const hasLabel = card.labels.findIndex(label => label.id === key) > -1;
                        if (hasLabel) return card;
                    }
                    return null;
                })
                .filter(Boolean);
        }

        this.setState({
            filterVals: newFilters,
            cards: filteredCards
        });
    }
    onSortCards = (key: string, items?: Array<Object>) => {
        const { data: { seeds } } = this.props;
        const cards = (items) || this.state.cards;
        let sortedCards = [...cards];
        if (key === 'comments' || key === 'likes') {
            sortedCards.sort((a, b) => {
                if (a[key].length > b[key].length) {
                    return -1;
                }
                if (a[key].length < b[key].length) {
                    return 1;
                }
                return 0;
            });
        } else {
            sortedCards = seeds;
        }
        this.setState({ cards: sortedCards, sortKey: key });
    }
    removeCard = (cardId:string) => {
        const { removeCard, data } = this.props;
        removeCard(cardId)
            .then(() => data.refetch())
            .catch((err) => { throw err; });
    }
    handleLike = (cardId: string) => {
        const { likeCard, unlikeCard, data: { me, refetch } } = this.props;
        const isLiked = me && me.likedSeeds && me.likedSeeds.findIndex(item => item.id === cardId) > -1;
        if (isLiked) {
            unlikeCard(cardId)
                .then(() => refetch())
                .catch((err) => { throw err; });
        } else {
            likeCard(cardId)
                .then(() => refetch())
                .catch((err) => { throw err; });
        }
    }
    onDelete = () => {
        const { data: { grove }, remove, router, setUpdate } = this.props;
        if (grove && grove.id) {
            remove(grove.id)
                .then(() => {
                    setUpdate('collections', true);
                    router.replace('/');
                })
                .catch(err => console.log(err));
        }
    }
    addCard = () => this.props.router.push(`/collection/${this.props.params.collectionId}/card`)
    showDialog = () => {
        const { showDetail } = this.state;
        const { data, router } = this.props;

        if (data.loading || !data.grove) return null;
        const { grove } = data;
        const cover = (grove.cover && grove.cover.urlThumb512) ? grove.cover : {};

        if (showDetail) {
            return (
                <CollectionDialog
                    close={() => {
                        data.refetch();
                        this.setState({ showDetail: false });
                    }}
                    name={data.grove.name}
                    description={data.grove.description}
                    editMode
                    id={data.grove.id}
                    router={router}
                    picture={cover.urlThumb512}
                    pictureId={cover.id}
                />
            );
        }
        return null;
    }
    showEdit = () => {
        const { showEdit } = this.state;

        if (showEdit) {
            return (
                <DropdownContainer>
                    <Dropdown>
                        <Menu onClose={() => this.setState({ showEdit: false })}>
                            <MenuItem
                                onClick={() => this.setState({
                                    showDetail: true,
                                    showEdit: false
                                })}
                            >
                                Update Collection
                            </MenuItem>
                            <MenuItem
                                onClick={this.onDelete}
                            >
                                Delete Collection
                            </MenuItem>
                        </Menu>
                    </Dropdown>
                </DropdownContainer>
            );
        }
        return null;
    }
    renderCards = () => {
        const { data: { me, loading }, router, params } = this.props;
        const { cards } = this.state;

        if (loading || !me) return <div style={{ marginTop: '40px' }}><DotSpinner /></div>;

        if (cards.length > 0) {
            return (
                <Grid>
                    <Masonry
                        style={masonStyles}
                    >
                        {cards.map((item) => {
                            const isLiked = me.likedSeeds && me.likedSeeds.findIndex(card => card.id === item.id) > -1;
                            let content;
                            try {
                                content = JSON.parse(item.content);
                            } catch (e) {
                                content = null;
                            }
                            return (
                                <Card
                                    key={item.id}
                                    {...item}
                                    content={content}
                                    onShow={() => router.push(`/collection/${params.collectionId}/card/${item.id}`)}
                                    onRemove={() => this.removeCard(item.id)}
                                    onLike={() => this.handleLike(item.id)}
                                    showComments={() => router.push(`/collection/${params.collectionId}/card/${item.id}/comments`)}
                                    likes={item.likes.length}
                                    isLiked={isLiked}
                                    cover={item.cover}
                                />
                            );
                        }
                        )}
                    </Masonry>
                </Grid>
            );
        }
        return <NoCards onClick={this.addCard} />;
    }
    renderInfo = () => {
        const { data: { loading, grove } } = this.props;
        const info = Object.assign({}, grove);
        return (
            <Info>
                <h1>{(loading) ? <Loading /> : info.name}</h1>
                <h3>{(loading) ? <Loading /> : info.description}</h3>
                <Stats>
                    <div>
                        <h3>{(loading) ? <Loading /> : info.stats && info.stats.seeds}</h3>
                        <h5>{(loading) ? <Loading /> : 'Cards'}</h5>
                    </div>
                </Stats>
            </Info>
        );
    }
    render() {
        const { sortKey, labels, filterVals, showEdit } = this.state;
        return (
            <Container>
                <Header>
                    {this.renderInfo()}
                    <ButtonGroup>
                        <SquareButton
                            onClick={this.addCard}
                            text="Add Card"
                            type="primary"
                        />
                        <SquareButton
                            onClick={() => this.setState({ showEdit: !showEdit })}
                            text="Edit Collection"
                        />
                        {this.showDialog()}
                        {this.showEdit()}
                    </ButtonGroup>
                </Header>
                <CollectionToolbar
                    onSort={this.onSortCards}
                    onFilter={this.onFilter}
                    active={sortKey}
                    labels={labels}
                    filters={filterVals}
                />
                {this.renderCards()}
            </Container>
        );
    }
}

export default CollectionDetail;
