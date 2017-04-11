// @flow
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Card from '../Card';
import Button from '../shared/Button';
import DotSpinner from '../shared/DotSpinner';
import CollectionDialog from '../../containers/CollectionDialogContainer';
import NoCards from './NoCards';

const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
`;

const Header = styled.section`
    width: 100%;
    min-height: 260px;
    background-color: ${colors.white};
    padding: 48px 72px;
    border-bottom: 1px solid ${colors.lightGrey};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Info = styled.div`
    max-width: 500px;
    & h1 {
        font-size: 24px;
        font-weight: bold;
        padding-bottom: 24px;
        display: block;
        letter-spacing: -.04em;
    }
    & p {
        font-size: 18px;
        font-weight: normal;
        padding-bottom: 40px;
        display: block;
        line-height: 1.48;
    }
`;

const Stats = styled.div`
    & div {
        display: inline-block;
        margin-right: 20px;
    }
    & h3 {
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 8px;
        display: block;
    }
    & h5 {
        font-size: 14px;
        font-weight: 300;
        text-transform: uppercase;
        padding-bottom: 8px;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    & button {
        margin-top: 5px;
    }
`;

const Grid = styled.section`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

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
            showEdit: false
        };
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
    renderCards = () => {
        const { data, router, params } = this.props;

        if (data.loading) return <div style={{ marginTop: '40px' }}><DotSpinner /></div>;

        if (data.seeds.length > 0) {
            return (
                <Grid>
                    {data.seeds.map((item) => {
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
    showDialog = () => {
        const { showEdit } = this.state;
        const { data, router } = this.props;

        if (data.loading) return null;
        const { grove } = data;
        console.log(grove);
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
    render() {
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
                {this.renderCards()}
            </Container>
        );
    }
}

export default CollectionDetail;
