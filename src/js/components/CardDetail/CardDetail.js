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
    constructor() {
        super();
        this.state = {
            showEdit: false,
            content: null,
            message: null,
            showComments: false
        };
    }
    onSave = () => {
        const { create, params } = this.props;
        const { content } = this.state;

        const { cardId, collectionId } = params;

        // if card doesn't exist create new
        if (!cardId && collectionId) {
            create(collectionId, JSON.stringify(content))
                .then(() => {
                    this.setState({ showEdit: false, message: { type: 'success', text: 'Saved!'} });
                })
                .catch(err => console.log(err));
        }
        // TODO: else update existing card
    }
    render() {
        const { showEdit, showComments } = this.state;
        const { router } = this.props;
        return (
            <Container>
                <TopBar
                    close={() => router.goBack()}
                    save={this.onSave}
                    showEdit={showEdit}
                    edit={() => this.setState({ showEdit: true })}
                    showComments={() => this.setStat({ showComments: !showComments })}
                />
                <Main>
                    <Editor />
                </Main>
            </Container>
        );
    }
}

export default CardDetail;
