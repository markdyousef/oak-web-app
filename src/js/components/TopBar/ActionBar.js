// @flow
import React, { Component } from 'react';
import { RoundButton } from '../shared/Button';
import { NavCenter } from './styles';
import { CardUpdate, CardCreate } from './index';
import { changeUrls } from '../../utils';
import { convertToRaw } from 'draft-js';

type DefaultProps = {
    updateCard: () => void
};

type Props = {
    cardId?: string,
    card?: Object,
    collectionId?: string,
    location: {
        pathname?: string
    },
    router: {
        push?: (path: string) => void,
        replace?: (path: string) => void
    },
    params?: { cardId?: string },
    showLabels?: bool,
    updateLabels?: (field: Object) => void,
    updateCard: (key: string, value: any) => void,
    create?: (id: string, name: string, content: string, cover: string) => Promise<>,
    update?: (cardId: string, content: string, cover: string) => Promise<>,
    data?: { loading: bool, collections: Array<Object> }
};

type State = {};

export default class ActionBar extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps = {
        router: {},
        location: {},
        updateCard: () => {}
    }
    state: State = {}
    onShowLabels = (show?:bool = true) => {
        const { updateLabels } = this.props;
        if (!updateLabels) return;
        updateLabels({
            key: 'showLabels',
            value: show
        });
    }
    onSave = () => {
        const { create, update, updateCard, card, router: { replace } } = this.props;
        if (!card) return;

        const cardId = card.get('cardId');
        const collectionId = card.get('collectionId');
        const editorState = card.get('editorState');
        const name = card.get('name');
        const images = card.get('images');
        const newEditorState = changeUrls(editorState, images);
        const content = JSON.stringify(convertToRaw(newEditorState.getCurrentContent()));
        const cover = images[0] && images[0].id;
        // existing cards has a cardId
        updateCard('isLoading', true);
        // no card name
        // if (!name) {
        //     const message = {
        //         type: 'error',
        //         message: 'Please provide a name for your card',
        //         onClick: this.onSave
        //     }
        //     this.updateCard('message', message);
        //     return;
        // }
        if (cardId && update) {
            update(cardId, content, cover);
        } else if (create) {
            create(collectionId, name, content, cover);
        }
        if (replace) replace(`/collection/${collectionId}/card/${cardId}`)
    }
    onCreate = () => {
        const { updateCard } = this.props;
        updateCard('menu', "CREATE");
    }
    renderActionBar = () => {
        const {
            location,
            router: { push },
            collectionId,
            card,
            showLabels,
            updateCard,
            data,
            params,
            showComments,
            onShowComments
        } = this.props;
        const inCardDetail =
            location.pathname &&
            location.pathname.includes('card');

        if (!inCardDetail) {
            return(
                <RoundButton
                    onClick={() => push && push('/collection/card')}
                    text="Create Card"
                    type="secondary"
                />
            )
        }
        const isLoading = card && card.get('isLoading');
        const isSaved = card && card.get('isSaved');
        const cardId = params && params.cardId;
        //Existing Card
        if (inCardDetail && cardId) {
            // open existing card in readOnly
            const readOnly = card && card.get('readOnly');
            return (
                <CardUpdate
                    onShowLabels={this.onShowLabels}
                    showLabels={showLabels}
                    readOnly={readOnly}
                    onEdit={() => updateCard('readOnly', !readOnly)}
                    onSave={this.onSave}
                    isLoading={isLoading}
                    onShowComments={() => onShowComments(!showComments)}
                />
            );
        }
        //New Card
        if (inCardDetail && !cardId) {
            const menu = card && card.get('menu');
            return (
                <CardCreate
                    isLoading={isLoading}
                    onCreate={this.onCreate}
                    showMenu={menu === "CREATE"}
                    closeMenu={() => updateCard('menu', null)}
                    collectionId={collectionId}
                    collections={data && data.collections}
                    updateCollection={collectionId => updateCard('collectionId', collectionId)}
                    showLabels={showLabels}
                    onShowLabels={this.onShowLabels}
                    saveCard={this.onSave}
                />
            )
        }
    }
    render() {
        return (
            <NavCenter>
                {this.renderActionBar()}
            </NavCenter>
        );
    }
}
