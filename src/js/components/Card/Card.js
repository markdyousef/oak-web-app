// @flow
import React, { Component, PropTypes } from 'react';
import moment from 'moment'
import styled from 'styled-components';
import colors from '../../styles/colors';


const Container = styled.div`
    width: 320px;
    background-color: ${colors.white};
    border: 1px solid ${colors.lightGrey};
    border-radius: 3px;
    padding: 16px;
`;

const Header = styled.div``;

const Main = styled.div``

const Bottom = styled.div`
`;

const Time = styled.span`
    font-size: 11px;
    color: ${colors.grey}
`;

class Card extends Component {
    static propTypes = {
        content: PropTypes.shape({
            blocks: PropTypes.arrayOf(PropTypes.object),
            entityMap: PropTypes.object
        }),
        creator: PropTypes.string.isRequired,
        labels: PropTypes.arrayOf(PropTypes.object),
        comments: PropTypes.arrayOf(PropTypes.object),
        updatedAt: PropTypes.string.isRequired
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
    renderContent = () => {
        const { content } = this.props;

        return (
            <div>
                {content && this.formatContent(content)}
            </div>
        );
    }
    renderBottom = () => {
        const { updatedAt } = this.props;
        return (
            <Time>
                {moment(updatedAt).fromNow()}
            </Time>
        );
    }
    render() {
        return (
            <Container>
                <Header></Header>
                <Main>
                    {this.renderContent()}
                </Main>
                <Bottom>
                    {this.renderBottom()}
                </Bottom>
            </Container>
        );
    }
}

export default Card;
