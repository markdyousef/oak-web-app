import React, { Component, PropTypes } from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState, getDefaultKeyBinding, KeyBindingUtil, convertToRaw } from 'draft-js';
import styled from 'styled-components';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import colors from '../../styles/colors';
import emojiStyles from './emojiStyles.css';

const emojiPlugin = createEmojiPlugin({
    theme: {
        emoji: emojiStyles.emoji,
        emojiSuggestions: emojiStyles.suggestions,
        emojiSuggestionsEntry: emojiStyles.suggestionsEntry,
        emojiSuggestionsEntryFocused: emojiStyles.suggestionsEntryFocused,
        emojiSuggestionsEntryText: emojiStyles.suggestionsEntryText,
        emojiSuggestionsEntryIcon: emojiStyles.suggestionsEntryIcon,
        emojiSuggestionsEntryAvatar: emojiStyles.suggestionsEntryAvatar
    }
});
const { EmojiSuggestions } = emojiPlugin;
const plugins = [emojiPlugin];
const { hasCommandModifier } = KeyBindingUtil;

const Container = styled.div`
    background: ${colors.white};
    border-top: 1px solid ${colors.lightGrey};
    ${''/* z-index: 100; */}
    padding: 16px;
`;

const Input = styled.div`
    border: 1px solid ${colors.lightGrey};
    padding: 9px 12px;
    border-radius: 3px;
`;

export default class CommentBox extends Component {
    static propTypes = {
        createComment: PropTypes.func.isRequired
    }
    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }
    onChange = editorState => this.setState({ editorState });
    focus = () => this.editor.focus();
    keyBinding = (event) => {
        if (event.keyCode === 13) {
            return 'send-message';
        }
        return getDefaultKeyBinding(event);
    }
    handleKeyCommand = (command) => {
        if (command === 'send-message') {
            const { createComment } = this.props;
            const { editorState } = this.state;
            const raw = convertToRaw(editorState.getCurrentContent());
            createComment(raw);
            this.setState({ editorState: EditorState.createEmpty() });
            return 'handled';
        }
        return 'not-handled';
    }
    render() {
        const { editorState } = this.state;
        return (
            <Container>
                <EmojiSuggestions />
                <Input onClick={this.focus}>
                    <Editor
                        editorState={editorState}
                        onChange={this.onChange}
                        plugins={plugins}
                        ref={(element) => { this.editor = element; }}
                        handleKeyCommand={this.handleKeyCommand}
                        keyBindingFn={this.keyBinding}
                    />
                </Input>
            </Container>
        );
    }
}
