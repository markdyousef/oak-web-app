// @flow
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Editor from 'draft-js-plugins-editor';
import { EditorState, convertFromRaw } from 'draft-js';
import colors from '../../styles/colors';

const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-wrap: wrap;
`;

const Profile = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 999em;
    margin-right: 10px;
`;

const MessageContainer = styled.div`
    min-width: 100px;
    width: 80%;
    & span {
        font-size: 15px;
        color: ${colors.black};
        line-height: 1.45;
        font-weight: 300;
        padding-top: 8px;
    }
`;

const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    & h3 {
        font-size: 14px;
        font-weight: bold;
        color: #131517;
        margin-right: 5px;
    }
    & a {
        font-size: 14px;
        font-weight: normal;
        color: #797C80;
        margin-right: 5px;
    }
    & h5 {
        font-size: 12px;
        font-weight: normal;
        color: #797C80;
    }
`;

export default class Comment extends Component {
    static propTypes = {
        text: PropTypes.shape({
            blocks: PropTypes.arrayOf(PropTypes.object),
            entityMap: PropTypes.object
        }).isRequired,
        createdAt: PropTypes.string.isRequired,
        creatorId: PropTypes.string.isRequired
    }
    static defaultProps = {
        type: 'string'
    }
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createWithContent(convertFromRaw(props.text))
        }
    }
    render() {
        const { createdAt, creatorId } = this.props;
        const { editorState } = this.state;
        return (
            <Container>
                <Profile />
                <MessageContainer>
                    <Header>
                        <h3>{creatorId}</h3>
                        {/* <a>{creatorId}</a> */}
                        <h5>{moment(createdAt).fromNow()}</h5>
                    </Header>
                    <Editor
                        editorState={editorState}
                        readOnly
                        onChange={() => {}}
                    />
                </MessageContainer>
            </Container>
        );
    }
}
