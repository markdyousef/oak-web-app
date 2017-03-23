// @flow
import React, { Component, PropTypes } from 'react';
import TopBar from './TopBar';
import Editor from '../Editor';

import css from './CardDetail.css';

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
        this.onSave = this.onSave.bind(this);
        this.state = {
            showEdit: false,
            content: null,
            message: null
        };
    }
    onSave() {
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
        const { showEdit, content } = this.state;
        const { router } = this.props;
        return (
            <div className={css.container}>
                <TopBar
                    close={() => router.goBack()}
                    save={this.onSave}
                    showEdit={showEdit}
                    edit={() => this.setState({ showEdit: true })}
                />
                <div className={css.main}>
                </div>
            </div>
        );
    }
}

export default CardDetail;
