import React, { Component, PropTypes } from 'react';
import { insertDataBlock } from '../../utils/blocks';
import Icon from '../../icons/image';
import ActionIcon from '../ActionIcon';


export default class ImageButton extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        editorState: PropTypes.shape({
            _immutable: PropTypes.object
        }).isRequired,
        setEditorState: PropTypes.func.isRequired,
        close: PropTypes.func.isRequired
    }
    onClick = () => {
        this.input.value = null;
        this.input.click();
    }
    onChange = (e) => {
        const { setEditorState, editorState, close } = this.props;
        e.preventDefault();

        const file = e.target.files[0];
        // // check file type
        if (file.type.indexOf('image/') === 0) {
            const src = URL.createObjectURL(file);
            const data = { src, type: 'image', display: 'medium' };
            setEditorState(insertDataBlock(editorState, data));
        }
        close();
    }
    render() {
        const { title } = this.props;
        return (
            <ActionIcon onClick={this.onClick}>
                <Icon />
                {title}
                <input
                    type="file"
                    accept="image/*"
                    ref={(c) => { this.input = c; }}
                    onChange={this.onChange}
                    style={{ display: 'none' }}
                />
            </ActionIcon>
        );
    }
}
