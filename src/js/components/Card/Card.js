// @flow
import React, { Component } from 'react';
import moment from 'moment';
import Dropdown from '../shared/Dropdown';
import CommentsIcon from '../../icons/comments';
import LikesIcon from '../../icons/likes';
import DotsIcon from '../../icons/dots';
import {
    Container,
    Header,
    User,
    Labels,
    Label,
    Main,
    Bottom,
    Time,
    Icon,
    Settings,
    H1,
    H2,
    P
} from './styles';

type DefaultProps = {
    title: null,
    content: null,
    labels: [],
    comments: [],
    likes: 0
};
type Props = {
    id: string,
    content: Object,
    cover: ?{
        urlThumb512: string
    },
    creator: {
        name: string,
        username: string,
        gravatar: ?string,
        avatar: ?{
            urlThumb64: ?string
        }
    },
    labels: ?Array<Object>,
    comments: ?Array<Object>,
    updatedAt: string,
    likes: ?Array<string>,
    removeCard: (id: string) => Promise<>,
    likeCard: (id: string) => Promise<>,
    unlikeCard: (id: string) => Promise<>,
    isLiked: bool,
    showComments: () => void,
    onShow: () => void,
    userId: string,
    updateCard: (field:Object) => void
};
type State = {
    showOptions: bool,
    likes: Array<string>,
    isLiked: bool
};

export default class Card extends Component<DefaultProps, Props, State> {
    static defaultProps:DefaultProps;
    state: State;
    props: Props;
    constructor() {
        super();
        this.state = {
            showOptions: false,
            likes: [],
            isLiked: false
        };
    }
    componentWillMount() {
        const { likes, isLiked } = this.props;
        this.setState({
            likes: (likes) || [],
            isLiked
        });
    }
    removeCard = () => {
        const { id, removeCard, updateCard } = this.props;
        removeCard(id)
            .then(() => {
                updateCard({
                    key: 'shouldUpdate',
                    value: true
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    handleLike = () => {
        const { likeCard, unlikeCard, id, userId } = this.props;
        const { likes, isLiked } = this.state;
        const newLikes = [...likes];

        if (isLiked) {
            unlikeCard(id)
                .then(() => {
                    this.setState({
                        isLiked: false,
                        likes: newLikes.filter(label => label !== userId)
                    })
                })
                .catch((err) => console.log(err));
        } else {
            likeCard(id)
                .then(() => {
                    newLikes.push(userId);
                    this.setState({
                        isLiked: true,
                        likes: newLikes
                    })
                })
                .catch((err) => { throw err; });
        }
    }
    formatContent = (content: Object) => {
        const { blocks } = content;
        return (
            <div>
                {blocks.map((block) => {
                    switch (block.type) {
                    case 'header-one':
                        return <H1 key={block.key}>{block.text}</H1>;
                    case 'header-two':
                        return <H2 key={block.key}>{block.text}</H2>;
                    default:
                        return <P key={block.key}>{block.text}</P>;
                    }
                })}
            </div>
        );
    }
    renderHeader = () => {
        const { creator: { name, username, avatar, gravatar }, labels } = this.props;
        let picture;
        // prefer avatar over gravatar
        if (gravatar) picture = gravatar;
        if (avatar) picture = avatar.urlThumb64;
        return (
            <Header>
                <Labels>
                    {labels && labels.map((label, index) => {
                        const right = 16 + (index * 12);
                        return (
                            <Label
                                key={label.id}
                                style={{ background: label.color, right }}
                            />
                        );
                    }).reverse()}
                </Labels>
                <User>
                    <img src={picture} alt="avatar" />
                    <div>
                        <h4>{name}</h4>
                        <h5>@{username}</h5>
                    </div>
                </User>
            </Header>
        );
    }
    renderContent = () => {
        const { content, onShow, cover } = this.props;
        let coverImg;
        if (cover && cover.urlThumb512) coverImg = cover.urlThumb512;
        return (
            <Main onClick={onShow}>
                {coverImg && <img alt="card" src={coverImg} />}
                {content && this.formatContent(content)}
                <button onClick={onShow}>Read more</button>
            </Main>
        );
    }
    renderBottom = () => {
        const { updatedAt, comments, showComments } = this.props;
        const { likes, isLiked } = this.state;
        const { showOptions } = this.state;
        return (
            <Bottom>
                <div>
                    <Icon onClick={showComments}>
                        <CommentsIcon />
                        <span>{(comments) ? comments.length : 0}</span>
                    </Icon>
                    <Icon onClick={this.handleLike}>
                        <LikesIcon isLiked={isLiked} />
                        <span>{likes.length}</span>
                    </Icon>
                    <Icon onClick={() => this.setState({ showOptions: !showOptions })}>
                        <DotsIcon />
                        {showOptions &&
                            <Settings>
                                <Dropdown
                                    arrowPos="left"
                                    onClose={() => this.setState({ showOptions: false })}
                                >
                                    <Icon onClick={this.removeCard}>Delete</Icon>
                                </Dropdown>
                            </Settings>
                        }
                    </Icon>
                </div>
                <Time>
                    {moment(updatedAt).fromNow()}
                </Time>
            </Bottom>
        );
    }
    render() {
        return (
            <Container>
                {this.renderHeader()}
                {this.renderContent()}
                {this.renderBottom()}
            </Container>
        );
    }
}
