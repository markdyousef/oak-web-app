import React, { Component, PropTypes } from 'react';
import { AtomicBlockUtils } from 'draft-js';
import Icon from '../../icons/embed';
import ActionIcon from '../ActionIcon';

export default class EmbedButton extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        editorState: PropTypes.shape({
            _immutable: PropTypes.object
        }).isRequired,
        setEditorState: PropTypes.func.isRequired,
        close: PropTypes.func.isRequired
    }
    onClick = () => {
        const { close } = this.props;
        const url = window.prompt('Enter URL', 'https://www.clai.io');
        close();

        if (!url) return;
        this.addEmbedURL(url);
    }
    addEmbedURL = (url) => {
        const { setEditorState, editorState } = this.props;
        const contentState = editorState.getCurrentContent();
        const entityKey = contentState
            .createEntity('embed', 'IMMUTABLE', { url })
            .getLastCreatedEntityKey();

        setEditorState(
            AtomicBlockUtils.insertAtomicBlock(
                editorState,
                entityKey,
                'E'
            )
        );
    }
    render() {
        const { title } = this.props;
        return (
            <ActionIcon onClick={this.onClick}>
                <Icon />
                {title}
            </ActionIcon>
        );
    }
}
