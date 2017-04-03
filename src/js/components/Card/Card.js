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
    position: relative;
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

const Label = styled.div`
    width: 10px;
    height: 20px;
    line-height: 1.54
    position: absolute;
    top: 0;
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
    & div {
        display: flex;
    }
`;

const Time = styled.span`
    font-size: 11px;
    color: ${colors.grey}
`;

const Icon = styled.div`
    height: 18px;
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
    & span {
        color: ${colors.grey};
        font-size: 14px;
    }
    & svg {
        height: 100%;
        width: 18px;
        margin-right: 3px;
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
        const { creator, labels } = this.props;
        return (
            <Header>
                <div>
                    {labels.map((label, index) => {
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
        const { updatedAt, comments, onShow } = this.props;
        return (
            <Bottom>
                <div>
                    <Icon>
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16.6 16"
                            style={{ enableBackground: 'new 0 0 16.6 16' }}
                        >
                            <g>
                                <path
                                    d="M14.3,16L14.3,16c-1.3,0-2.7-0.8-3.2-1.2c-0.9,0.3-1.8,0.5-2.8,0.5c-4.5,0-8.1-3.4-8.1-7.5s3.6-7.5,8.1-7.5
                                    s8.1,3.4,8.1,7.5c0,1.5-0.5,2.9-1.3,4.1c0.5,0.6,1.3,2,1.1,3c-0.1,0.4-0.4,0.7-0.8,0.9C15,15.9,14.7,16,14.3,16z M11.2,13.7
                                    l0.2,0.2c0,0,1.6,1.1,2.9,1.1l0,0c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.2-0.2,0.2-0.2c0.1-0.5-0.6-1.7-1.1-2.4L13.7,12l0.2-0.3
                                    c0.9-1.1,1.3-2.4,1.3-3.8c0-3.6-3.2-6.5-7.1-6.5S1.2,4.2,1.2,7.8s3.2,6.5,7.1,6.5c0.9,0,1.8-0.2,2.7-0.5L11.2,13.7z"
                                />
                            </g>
                        </svg>
                        <span>{comments.length}</span>
                    </Icon>
                    <Icon>
                        <svg
                            version="1.1"
                            id="Layer_1"
                            viewBox="0 0 17.8 16"
                            style={{ enableBackground: 'new 0 0 17.8 16' }}
                        >
                            <g id="XMLID_2_">
                                <g>
                                    <g>
                                        <path
                                            d="M8.9,15.6c-0.1,0-0.2,0-0.3-0.1c-0.8-0.5-1.4-1-2.1-1.4C3.4,12,2,11.1,0.7,8.2c-1.6-3.5,0.4-5.8,0.5-5.9
                                                c0,0,1.6-2.1,4.1-1.9c1.8,0.2,3,1,3.6,1.5c0.6-0.5,1.8-1.4,3.6-1.5c2.6-0.2,4.1,1.8,4.2,1.9s2,2.3,0.4,5.8
                                                C15.8,11,14.3,12,11.3,14c-0.6,0.4-1.3,0.9-2.1,1.4C9.1,15.5,9,15.6,8.9,15.6z M4.9,1.4C3.1,1.4,2,3,1.9,3
                                                C1.8,3.1,0.3,4.9,1.6,7.8c1.2,2.6,2.4,3.4,5.5,5.5c0.5,0.4,1.1,0.8,1.8,1.2c0.7-0.5,1.3-0.9,1.8-1.2c3-2,4.3-2.8,5.4-5.4
                                                c1.3-3-0.3-4.8-0.3-4.8c0-0.1-1.3-1.7-3.3-1.6C10.5,1.6,9.3,3,9.3,3C9.2,3.1,9,3.2,8.9,3.2C8.7,3.1,8.6,3.1,8.5,3
                                                S7.2,1.6,5.2,1.5C5.1,1.4,5,1.4,4.9,1.4z"
                                        />
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span>{0}</span>
                    </Icon>
                    <Icon onClick={onShow}>
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            style={{ enableBackground: 'new 0 0 16 16' }}
                        >
                            <g>
                                <path
                                    d="M6.9,8.4l-5.6,5.6v-3.7c0-0.3-0.2-0.5-0.5-0.5s-0.4,0.2-0.4,0.5v5.1l0.3,0.3h5.1c0.2,0,0.4-0.2,0.4-0.5
                                    c0-0.3-0.2-0.5-0.4-0.5H2l5.5-5.5c0.2-0.2,0.2-0.5,0-0.6C7.4,8.4,7.2,8.2,6.9,8.4z"
                                />
                                <path
                                    d="M15.2,0.5H10l0,0c0,0-0.1,0.2-0.1,0.4c0,0.3,0.2,0.5,0.5,0.5H14L8.4,7c-0.2,0.2-0.2,0.5,0,0.6c0.1,0.1,0.2,0.1,0.3,0.1
                                    c0.1,0,0.2,0,0.3-0.1l5.5-5.5v3.7c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5V0.7L15.2,0.5z"
                                />
                            </g>
                        </svg>
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
