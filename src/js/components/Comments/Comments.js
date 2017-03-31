// @flow
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import CommentBox from './CommentBox';

const Container = styled.section`
    height: 100%;
    width: 100%;
    max-width: 400px;
    min-height: 400px;
    border: 1px solid ${colors.lightGrey};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const CommentsPanel = styled.div`
    padding: 16px 16px 4px;
    background: ${colors.white};
    height: 100%;
`;

export default class Comments extends Component {
    static propTypes = {};
    constructor() {
        super();
        this.state = {}
    }
    renderComments = () => {}
    render() {
        return (
            <Container>
                <CommentsPanel>
                    {this.renderComments()}
                </CommentsPanel>
                <CommentBox />
            </Container>
        );
    }
}
