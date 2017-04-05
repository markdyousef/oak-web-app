// @flow
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import CommentBox from './CommentBox';

const Container = styled.section`
    height: 100%;
    width: 100%;
    max-width: 400px;
    border: 1px solid ${colors.lightGrey};
    position: relative;
`;

const CommentsPanel = styled.div`
    ${''/* padding: 16px 16px 4px; */}
    background: ${colors.white};
`;

const CommentsInput = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
`;

const Comment = styled.div`
    width: 100%;
    height: 50px;
`;

export default class Comments extends Component {
    static propTypes = {
        data: PropTypes.shape({
            loading: PropTypes.bool,
            seed: PropTypes.object
        }).isRequired
    };
    constructor() {
        super();
        this.state = {}
    }
    renderComments = () => {
        const { data } = this.props;

        if (data.loading) return null;

        const { comments } = data.seed;
        return comments.map(comment => (
            <Comment>
                {comment.text}
            </Comment>
        ));
    }
    render() {
        return (
            <Container>
                <CommentsPanel>
                    {this.renderComments()}
                </CommentsPanel>
                <CommentsInput>
                    <CommentBox />
                </CommentsInput>
            </Container>
        );
    }
}
