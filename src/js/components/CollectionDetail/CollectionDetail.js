// @flow
import React, { Component } from 'react';
import Card from '../Card';
import Button from '../shared/Button';
import DotSpinner from '../shared/DotSpinner';
import CollectionDialog from '../../containers/CollectionDialogContainer';
import NoCards from './NoCards';
import CollectionToolbar from '../CollectionToolbar';
import {
    Container,
    Header,
    Info,
    Stats,
    ButtonGroup,
    Grid
} from './styles';

type Data = {
    loading: bool,
    refetch: Function,
    me: {
        likedSeeds: ?Array<Object>
    },
    grove: {
        id: string,
        name: string,
        description: ?string,
        cover: ?Object,
        stats: Object
    },
    seeds: Array<Object>
}
type DefaultProps = {};
type Props = {
    params: {
        collectionId: string
    },
    router: {
        push: Function
    },
    data: Data,
    removeCard: Function,
    likeCard: Function,
    unlikeCard: Function
};
type State = {
    showEdit: bool,
    cards: Array<Object>,
    sortKey: string
};

class CollectionDetail extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps;
    props: Props;
    state: State;
    constructor() {
        super();
        this.state = {
            showEdit: false,
            cards: [],
            sortKey: 'date'
        };
    }
    componentWillReceiveProps(nextProps:Props) {
        const { data } = nextProps;

        if (data.loading) return;

        if (data.seeds) {
            this.setState({ cards: data.seeds });
        }
    }
    onSortCards = (key: string) => {
        const { data: { seeds } } = this.props;
        const { cards } = this.state;
        let sortedCards = cards;
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
    removeCard = (cardId:String) => {
        const { removeCard, data } = this.props;
        removeCard(cardId)
            .then(() => data.refetch())
            .catch((err) => { throw err; });
    }
    handleLike = (cardId: String) => {
        const { likeCard, unlikeCard, data: { me, refetch } } = this.props;
        const isLiked = me.likedSeeds && me.likedSeeds.findIndex(item => item.id === cardId) > -1;
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
    addCard = () => this.props.router.push(`collection/${this.props.params.collectionId}/card`)
    showDialog = () => {
        const { showEdit } = this.state;
        const { data, router } = this.props;

        if (data.loading) return null;
        const { grove } = data;
        const cover = (grove.cover && grove.cover.urlThumb512) ? grove.cover : {};

        if (showEdit) {
            return (
                <CollectionDialog
                    close={() => {
                        data.refetch();
                        this.setState({ showEdit: false });
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
    renderCards = () => {
        const { data: { me, loading }, router, params } = this.props;
        const { cards } = this.state;

        if (loading) return <div style={{ marginTop: '40px' }}><DotSpinner /></div>;

        if (cards.length > 0) {
            return (
                <Grid>
                    {cards.map((item) => {
                        const isLiked = me.likedSeeds && me.likedSeeds.findIndex(card => card.id === item.id) > -1;
                        return (
                            <Card
                                key={item.id}
                                {...item}
                                content={JSON.parse(item.content)}
                                onShow={() => router.push(`collection/${params.collectionId}/card/${item.id}`)}
                                onRemove={() => this.removeCard(item.id)}
                                onLike={() => this.handleLike(item.id)}
                                showComments={() => router.push(`collection/${params.collectionId}/card/${item.id}/comments`)}
                                likes={item.likes.length}
                                isLiked={isLiked}
                            />
                        );
                    }
                    )}
                </Grid>
            );
        }
        return <NoCards onClick={this.addCard} />;
    }
    renderInfo = () => {
        const { data } = this.props;

        if (data.loading) return <div>Loading </div>;

        const { name, description, stats } = data.grove;

        return (
            <Info>
                <h1>{name}</h1>
                <p>{description}</p>
                <Stats>
                    <div>
                        <h3>{stats.seeds}</h3>
                        <h5>Cards</h5>
                    </div>
                </Stats>
            </Info>
        );
    }
    render() {
        const { sortKey } = this.state;
        return (
            <Container>
                <Header>
                    {this.renderInfo()}
                    <ButtonGroup>
                        <Button
                            onClick={this.addCard}
                            text="Add Card"
                            type="primary"
                        />
                        <Button
                            onClick={() => this.setState({ showEdit: true })}
                            text="Edit Collection"
                        />
                        {this.showDialog()}
                    </ButtonGroup>
                </Header>
                <CollectionToolbar onSelect={this.onSortCards} active={sortKey} />
                {this.renderCards()}
            </Container>
        );
    }
}

export default CollectionDetail;
