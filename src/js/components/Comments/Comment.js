// @flow
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import moment from 'moment';
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
    & p {
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
    & span {
        font-size: 12px;
        font-weight: normal;
        color: #797C80;
    }
`;

// TODO: make it editable with draft-js
export default class Comment extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        creatorId: PropTypes.string.isRequired
    }
    constructor() {
        super();
        this.state = {}
    }
    render() {
        const { text, createdAt, creatorId } = this.props;
        return (
            <Container>
                <Profile />
                <MessageContainer>
                    <Header>
                        <h3>{creatorId}</h3>
                        {/* <a>{creatorId}</a> */}
                        <span>{moment(createdAt).fromNow()}</span>
                    </Header>
                    <p>{text}</p>
                </MessageContainer>
            </Container>
        );
    }
}
