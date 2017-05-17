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
    LabelWrapper,
    Labels,
    Label,
    Paragraph,
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
                    }
                })}
                <Paragraph>
                {blocks.map((block) => {
                    switch (block.type) {
                    case 'unstyled':
                        return <P key={block.key}>{block.text}</P>;
                    }
                })}
                </Paragraph>
            </div>
        );
    }
    renderHeader = () => {
        const { creator: { name, username } } = this.props;
        return (
            <Header>
            </Header>
        );
    }
    renderContent = () => {
        const { updatedAt, content, onShow, cover, labels } = this.props;
        let coverImg;
        if (cover && cover.urlThumb512) coverImg = cover.urlThumb512;
        return (
            <Main onClick={onShow}>
                {coverImg && <img alt="card" src={coverImg} />}
                {content && this.formatContent(content)}
                { /* <button onClick={onShow}>Read more</button> */ }
                    <Labels>
                        {labels && labels.map((label, index) => {
                            const right = 16 + (index * 12);
                            return (
                            <LabelWrapper>
                                <Label
                                    key={label.id}
                                    style={{ background: label.color, right }}
                                />
                            </LabelWrapper>
                            );
                        }).reverse()}
                    </Labels>
                <Time>
                    {moment(updatedAt).fromNow()}
                </Time>
            </Main>
        );
    }
    renderBottom = () => {
        const { comments, showComments, creator: { avatar, gravatar } } = this.props;
        const { likes, isLiked } = this.state;
        const { showOptions } = this.state;
        let picture;
        // prefer avatar over gravatar
        if (gravatar) picture = gravatar;
        if (avatar) picture = avatar.urlThumb64;
        console.log(picture)
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
                    <User>
                        <img src={picture} alt="avatar" />
                        { /* <div>
                            <h4>{name}</h4>
                            <h5>@{username}</h5>
                        </div> */ }
                    </User>
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
