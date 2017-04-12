// @flow
import React, { Component, PropTypes } from 'react';
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
} from './styles'

class CollectionDetail extends Component {
    static propTypes = {
        params: PropTypes.shape({
            collectionId: PropTypes.string
        }).isRequired,
        router: PropTypes.shape({
            push: PropTypes.func
        }).isRequired,
        data: PropTypes.shape({
            loading: PropTypes.bool,
            me: PropTypes.shape({
                likedSeeds: PropTypes.arrayOf(PropTypes.object)
            }),
            grove: PropTypes.shape({
                id: PropTypes.string,
                name: PropTypes.string,
                description: PropTypes.string,
                cover: PropTypes.object,
                stats: PropTypes.object
            }),
            seeds: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string,
                content: PropTypes.string,
                creator: PropTypes.object,
                labels: PropTypes.arrayOf(PropTypes.object),
                comments: PropTypes.arrayOf(PropTypes.object),
                updatedAt: PropTypes.string.isRequired
            }))
        }).isRequired,
        removeCard: PropTypes.func.isRequired,
        likeCard: PropTypes.func.isRequired,
        unlikeCard: PropTypes.func.isRequired
    }
    constructor() {
        super();
        this.state = {
            showEdit: false,
            cards: [],
            sortKey: 'date'
        };
    }
    componentWillReceiveProps(nextProps) {
        const { data } = nextProps;

        if (data.loading) return;

        if (data.seeds) {
            this.setState({ cards: data.seeds });
        }
    }
    onSortCards = (key: string) => {
        const { data: { seeds } } = this.props;
        const { cards } = this.state;
        let sortedCards = Object.assign([], cards);
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
            .catch(err => console.log(err))
    }
    handleLike = (cardId: String) => {
        const { likeCard, unlikeCard, data } = this.props;
        const isLiked = data.me.likedSeeds.findIndex(item => item.id === cardId) > -1;
        if (isLiked) {
            unlikeCard(cardId)
                .then(() => data.refetch())
                .catch(err => console.log(err))
        } else {
            likeCard(cardId)
                .then(() => data.refetch())
                .catch(err => console.log(err));
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
                        this.setState({ showEdit: false })
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
        const { data, router, params } = this.props;
        const { cards } = this.state;

        if (data.loading) return <div style={{ marginTop: '40px' }}><DotSpinner /></div>;

        if (cards.length > 0) {
            return (
                <Grid>
                    {cards.map((item) => {
                        const isLiked = data.me.likedSeeds.findIndex(card => card.id === item.id) > -1;
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
