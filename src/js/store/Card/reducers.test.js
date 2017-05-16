// @flow
import { Map, List } from 'immutable';
import { EditorState } from 'draft-js';
import reducer from './reducers';
import * as actions from './actions';
import * as types from '../constants/ActionTypes';

const initialState = Map({
    isLoading: false,
    shouldUpdate: false,
    cardId: '1',
    collectionId: null,
    message: Map({ type: 'error', message: 'something' }),
    editorState: EditorState.createEmpty(),
    images: List([])
});

const content = "{\"entityMap\":{},\"blocks\":[{\"key\":\"6hgiu\",\"text\":\"Kill with one punch\",\"type\":\"header-one\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"9s10\",\"text\":\"Coool and awesome stuff\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"6ru8d\",\"text\":\"Abuergine of doom\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"1pv08\",\"text\":\"cool of doom coool of doom dooooom\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"9a03h\",\"text\":\"Det er for vildt\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"1fvg\",\"text\":\"\",\"type\":\"atomic\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{\"src\":\"blob:http://192.168.1.28:3000/df2f039a-04ba-4bca-98ef-590c51ed32c7\",\"type\":\"image\",\"display\":\"medium\",\"name\":\"C-dGORjU0AAbCBi.jpg\"}},{\"key\":\"563th\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"952pn\",\"text\":\"\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"8catm\",\"text\":\"In case a customer don't comply #takeoutthecustomer\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"9ia1d\",\"text\":\"\",\"type\":\"atomic\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{\"src\":\"https://www.youtube.com/watch?v=98bcjKLK210\\n\\n\",\"type\":\"embed\"}},{\"key\":\"3itd\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"92hut\",\"text\":\"\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}";

describe('comments reducer', () => {
    it('should return initialState', () => {
        expect(reducer(initialState, {}))
            .toEqual(initialState);
    });
    it('should set field an return new state', () => {
        const field = {
            key: 'isLoading',
            value: true
        };
        const action = actions.updateCard(field);
        const state = reducer(initialState, action);
        expect(state.get('isLoading')).toEqual(true);
    });
    it('should clear the Card store', () => {
        const action = actions.clearCard();
        const state = reducer(initialState, action);
        expect(state.get('cardId')).toEqual(null);
    });
    it('should set card fields and ui state', () => {
        const card = { id: '2' };
        const action = actions.setCard(card);
        const state = reducer(initialState, action);
        expect(state.get('cardId')).toEqual(card.id);
        expect(state.get('message')).toEqual(null);
    })
    it('should set card content', () => {
        const action = actions.setCardContent(content);
        const state = reducer(initialState, action);
        expect(state.get('editorState')).not.toEqual(initialState.get('editorState'));
    })
    it('should add image to imageList', () => {
        const image = { id: 'image' };
        const action = actions.addCardImage(image);
        const state = reducer(initialState, action);
        expect(state.get('images')).not.toEqual(initialState.get('images'));
    })
});
