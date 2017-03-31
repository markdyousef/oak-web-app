// @flow
import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import colors from '../../styles/colors';

const button = () => {
    return `
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding: 0
    `;
};

const Container = styled.div`
    width: 320px;
    background-color: ${colors.white};
    border: 1px solid ${colors.lightGrey};
    border-radius: 3px;
    padding: 16px;
    margin: 5px;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
`;

const User = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    & img {
        height: 25px;
        width: 25px;
        border-radius: 999em;
        margin-right: 5px;
        border: 1px solid ${colors.lightGrey}
    }
`;

const Main = styled.div`
    margin-bottom: 16px;
    text-align: left;
    & img {
        max-width: 288px;
        width: 100%;
        margin-bottom: 16px;
        height: 100px;
    }
    & button {
        margin-top: 16px;
        ${button()};
        color: ${colors.grey}
    }
`;

const Bottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    & button {
        display: inline-block;
        ${button()}
    }
`;

const Time = styled.span`
    font-size: 11px;
    color: ${colors.grey}
`;

const Icon = styled.button`
    display: flex;
    align-items: center;
    margin-right: 10px;
    & span {
        color: ${colors.grey}
    }
`;

export default class Card extends Component {
    static propTypes = {
        content: PropTypes.shape({
            blocks: PropTypes.arrayOf(PropTypes.object),
            entityMap: PropTypes.object
        }),
        creator: PropTypes.string.isRequired,
        labels: PropTypes.arrayOf(PropTypes.object),
        comments: PropTypes.arrayOf(PropTypes.object),
        updatedAt: PropTypes.string.isRequired,
        onShow: PropTypes.func.isRequired
    }
    static defaultProps = {
        title: null,
        content: null,
        labels: [],
        comments: []
    }
    constructor() {
        super();
        this.state = {};
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
        const { creator } = this.props;
        return (
            <Header>
                <User>
                    <img />
                    {creator}
                </User>
            </Header>
        );
    }
    renderContent = () => {
        const { content } = this.props;

        return (
            <Main>
                <img alt="card" src={null} />
                {content && this.formatContent(content)}
                <button>Read more</button>
            </Main>
        );
    }
    renderBottom = () => {
        const { updatedAt, labels, comments, onShow } = this.props;
        return (
            <Bottom>
                <div>
                    <Icon>
                        <span>{comments.length}</span>
                    </Icon>
                    <Icon>
                        <span>{labels.length}</span>
                    </Icon>
                    <Icon onClick={onShow}>
                        Ex
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
