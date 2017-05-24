// @flow
import React, { Component } from 'react';
import { convertToRaw } from 'draft-js';
import { RoundButton } from '../shared/Button';
import { NavCenter } from './styles';
import { CardUpdate, CardCreate } from './index';
import { changeUrls } from '../../utils';
import * as types from './contants';

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
    params: { cardId?: string, collectionId?: string },
    showLabels?: bool,
    updateLabels?: (key: string, value: any) => void,
    updateCard: (key: string, value: any) => void,
    create?: (id: string, name: string, content: string, cover: string) => Promise<>,
    update?: (cardId: string, content: string, cover: string) => Promise<>,
    data?: { loading: bool, collections: Array<Object> },
    showComments?: bool,
    onShowComments?: (bool) => void,
    trackEvent?: (type: string) => void
};

type State = {};

export default class ActionBar extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps = {
        router: {},
        location: {},
        updateCard: () => {},
        params: {}
    }
    state: State = {}
    props: Props;
    onShowLabels = (show?:bool = true) => {
        const { updateLabels, trackEvent } = this.props;
        if (!updateLabels) return;

        // Analytics
        if (trackEvent) trackEvent(types.SHOW_LABELS);

        if (updateLabels) updateLabels('showLabels', show);
    }
    onShowComments = () => {
        const { trackEvent, onShowComments, showComments } = this.props;

        // Analytics
        if (trackEvent) trackEvent(types.SHOW_COMMENTS);

        if (onShowComments) onShowComments(!showComments);
    }
    onEdit = () => {
        const { updateCard, card, trackEvent } = this.props;

        // Analytics
        if (trackEvent) trackEvent(types.EDIT);

        const readOnly = card && card.get('readOnly');
        updateCard('readOnly', !readOnly);
    }
    goToCard = (collectionId: string, cardId: string) => {
        const { router: { replace } } = this.props;
        if (replace) replace(`/collection/${collectionId}/card/${cardId}`);
    }
    goToColllection = (collectionId: string) => {
        const { router: { push } } = this.props;
        if (push) push(`/collection/${collectionId}`);
    }
    onSave = (newCard?: bool) => {
        const { create, update, updateCard, card, trackEvent } = this.props;
        if (!card) return;

        // Analytics
        if (trackEvent) trackEvent(types.SAVE);

        const cardId = card.get('cardId');
        const collectionId = card.get('collectionId');
        const editorState = card.get('editorState');
        const name = card.get('name');
        const images = card.get('images');
        const newEditorState = changeUrls(editorState, images);
        const content = JSON.stringify(convertToRaw(newEditorState.getCurrentContent()));
        const cover = images.getIn([0, 'id']);
        // existing cards has a cardId
        updateCard('isLoading', true);
        if (cardId && update) {
            update(cardId, content, cover)
                .then((id) => {
                    if (newCard === true) return this.goToColllection(collectionId);
                    this.goToCard(collectionId, cardId)
                });
        } else if (create) {
            create(collectionId, name || '', content, cover)
                .then((id) => {
                    if (newCard === true) return this.goToColllection(collectionId);
                    this.goToCard(collectionId, id);
                });
        }
    }
    onCreate = () => {
        const { updateCard, trackEvent } = this.props;

        // Analytics
        if (trackEvent) trackEvent(types.CREATE);

        updateCard('menu', 'CREATE');
    }
    onNewCard = () => {
        const {
            router: { push },
            params: { collectionId },
            trackEvent
        } = this.props;

        // Analytics
        if (trackEvent) trackEvent(types.NEW);

        if (push) {
            if (!collectionId) {
                push('/collection/card');
                return;
            }
            push(`/collection/${collectionId}/card`);
        }
    }
    selectCollection = (id: string) => {
        const { updateCard, updateLabels, collectionId } = this.props;
        updateCard('prevCollectionId', collectionId);
        updateCard('collectionId', id);
        updateCard('cardLabels', []);
        if (updateLabels) updateLabels('didInitialize', false);
    }
    renderActionBar = () => {
        const {
            location,
            collectionId,
            card,
            showLabels,
            updateCard,
            data,
            params
        } = this.props;
        const inCardDetail =
            location.pathname &&
            location.pathname.includes('card');

        if (!inCardDetail) {
            return (
                <RoundButton
                    onClick={this.onNewCard}
                    text="Create a post"
                    type="secondary"
                />
            );
        }
        const isLoading = card && card.get('isLoading');
        const cardId = params && params.cardId;
        // Existing Card
        if (inCardDetail && cardId) {
            // open existing card in readOnly
            const readOnly = card && card.get('readOnly');
            return (
                <CardUpdate
                    onShowLabels={this.onShowLabels}
                    showLabels={showLabels}
                    readOnly={readOnly}
                    onEdit={this.onEdit}
                    onSave={this.onSave}
                    isLoading={isLoading}
                    onShowComments={this.onShowComments}
                />
            );
        }
        // New Card
        if (inCardDetail && !cardId) {
            const menu = card && card.get('menu');
            const isEdited = card && card.get('isEdited');
            return (
                <CardCreate
                    isLoading={isLoading}
                    onCreate={this.onCreate}
                    showMenu={menu === 'CREATE'}
                    closeMenu={() => updateCard('menu', null)}
                    collectionId={collectionId}
                    collections={data && data.collections}
                    updateCollection={id => this.selectCollection(id)}
                    showLabels={showLabels}
                    onShowLabels={this.onShowLabels}
                    saveCard={() => this.onSave(true)}
                    isEdited={isEdited}
                />
            );
        }
        return null;
    }
    render() {
        return (
            <NavCenter>
                {this.renderActionBar()}
            </NavCenter>
        );
    }
}
