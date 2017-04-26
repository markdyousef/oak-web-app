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
    Label,
    Main,
    Bottom,
    Time,
    Icon,
    Settings
} from './styles';

type DefaultProps = {
    title: null,
    content: null,
    labels: [],
    comments: [],
    likes: 0
};
type Props = {
    content: Object,
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
    onShow: Function,
    onRemove: Function,
    onLike: Function,
    showComments: Function,
    likes: number,
    isLiked: bool
};
type State = {
    showOptions: bool
};

export default class Card extends Component<DefaultProps, Props, State> {
    static defaultProps:DefaultProps;
    state: State;
    props: Props;
    constructor() {
        super();
        this.state = {
            showOptions: false
        };
    }
    formatContent = (content: Object) => {
        const { blocks } = content;
        return (
            <div>
                {blocks.map(block => <p key={block.key}>{block.text}</p>)}
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
                <div>
                    {labels && labels.map((label, index) => {
                        const right = 16 + (index * 12);
                        return (
                            <Label
                                key={label.id}
                                style={{ background: label.color, right }}
                            />
                        );
                    })}
                </div>
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
            <Main>
                <img alt="card" src={coverImg} />
                {content && this.formatContent(content)}
                <button onClick={onShow}>Read more</button>
            </Main>
        );
    }
    renderBottom = () => {
        const { updatedAt, comments, onRemove, onLike, showComments, likes, isLiked, cover } = this.props;
        const { showOptions } = this.state;
        return (
            <Bottom>
                <div>
                    <Icon onClick={showComments}>
                        <CommentsIcon />
                        <span>{(comments) ? comments.length : 0}</span>
                    </Icon>
                    <Icon onClick={onLike}>
                        <LikesIcon isLiked={isLiked} />
                        <span>{likes}</span>
                    </Icon>
                    <Icon onClick={() => this.setState({ showOptions: !showOptions })}>
                        <DotsIcon />
                        {showOptions &&
                            <Settings>
                                <Dropdown arrowPos="left">
                                    <Icon onClick={onRemove}>Delete</Icon>
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
