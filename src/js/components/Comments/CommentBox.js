import React, { Component, PropTypes } from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState } from 'draft-js';
import styled from 'styled-components';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import colors from '../../styles/colors';
import emojiStyles from './emojiStyles.css'

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

const Container = styled.div`
    background: ${colors.white};
    border-top: 1px solid ${colors.lightGrey};
    ${''/* z-index: 100; */}
    padding: 16px;
`;

const Input = styled.div`
`

export default class CommentBox extends Component {
    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }
    onChange = editorState => this.setState({ editorState });
    focus = () => this.editor.focus();
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
                    />
                </Input>
            </Container>
        );
    }
}
