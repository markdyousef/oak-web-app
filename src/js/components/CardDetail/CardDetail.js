// @flow
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import TopBar from './TopBar';
import Editor from '../Editor';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${colors.white};
`;

const Main = styled.section`
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

const CommentsContainer = styled.div`
    width: 200px;
    height: 100%;
    background: ${colors.grey};
`;

class CardDetail extends Component {
    static propTypes = {
        params: PropTypes.shape({
            cardId: PropTypes.string,
            collectionId: PropTypes.string.isRequired
        }).isRequired,
        create: PropTypes.func.isRequired,
        router: PropTypes.shape({
            goBack: PropTypes.func.isRequired
        }).isRequired
    }
    constructor(props) {
        super(props);
        this.cardId = props.params.cardId,
        this.collectionId = props.params.collectionId
        this.state = {
            showEdit: false,
            content: null,
            message: null,
            showComments: false,
            isSaved: false
        };
    }
    onSave = () => {
        const { create, params } = this.props;
        const { content } = this.state;

        // if card doesn't exist create new
        if (!this.cardId && this.collectionId) {
            create(this.collectionId, JSON.stringify(content))
                .then((res) => {
                    this.cardId = res.data.createSeed.id;
                    this.setState({ showEdit: false, isSaved: true, message: { type: 'success', text: 'Saved!'} });
                })
                .catch(err => console.log(err));
        }
        // TODO: else update existing card
    }
    renderTopBar = () => {
        const { router } = this.props;
        const { showEdit, isSaved } = this.state;

        // if no cardId, save to get cardId
        if (!this.cardId) {
            // if card is already saved
            if (!isSaved) this.onSave();
            return null;
        }
        return (
            <TopBar
                close={() => router.goBack()}
                save={this.onSave}
                showEdit={showEdit}
                edit={() => this.setState({ showEdit: true })}
                showComments={() => this.setState({ showComments: !showComments })}
                cardId={this.cardId}
                collectionId={this.collectionId}
            />
        );
    }
    render() {
        const { showEdit, showComments } = this.state;
        return (
            <Container>
                {this.renderTopBar()}
                <Main>
                    {/* <Editor /> */}
                    {showComments &&
                        <CommentsContainer>
                            HOL
                        </CommentsContainer>
                    }
                </Main>
            </Container>
        );
    }
}

export default CardDetail;
