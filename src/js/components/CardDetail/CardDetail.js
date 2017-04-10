// @flow
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import TopBar from './TopBar';
import Comments from '../../containers/CommentsContainer';
import Editor from '../Editor';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${colors.white};
`;

const Main = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const CommentsContainer = styled.div`
    width: 300px;
    height: 80%;
    position: absolute;
    right: 0;
`;

const EditorContainer = styled.div`
    width: 100%;
`;

class CardDetail extends Component {
    static propTypes = {
        params: PropTypes.shape({
            collectionId: PropTypes.string.isRequired,
            cardId: PropTypes.string,
            comments: PropTypes.string
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
    componentWillMount() {
        const { params } = this.props;
        if (params.comments) {
            this.setState({ showComments: true });
        }
    }
    onSave = () => {
        const { create, params } = this.props;
        const { content } = this.state;

        // if card doesn't exist create new
        if (!this.cardId && this.collectionId) {
            create(this.collectionId, JSON.stringify(content))
                .then((res) => {
                    this.cardId = res.data.createSeed.id;
                    this.setState({
                        showEdit: false,
                        isSaved: true,
                        message: { type: 'success', text: 'Saved!'}
                    });
                })
                .catch(err => console.log(err));
        }
        // TODO: else update existing card
    }
    renderTopBar = () => {
        const { router } = this.props;
        const { showEdit, isSaved, showComments } = this.state;

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
    renderComments = () => {
        const { showComments } = this.state;

        if (!showComments) return null;

        return (
            <CommentsContainer>
                <Comments cardId={this.cardId} />
            </CommentsContainer>
        );
    }
    render() {
        return (
            <Container>
                {this.renderTopBar()}
                <Main>
                    <EditorContainer>
                        <Editor />
                    </EditorContainer>
                    {this.renderComments()}
                </Main>
            </Container>
        );
    }
}

export default CardDetail;
