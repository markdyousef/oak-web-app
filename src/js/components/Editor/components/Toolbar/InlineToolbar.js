// @flow
import React, { PropTypes } from 'react';
import StyleButton from '../StyleButton';
import boldIcon from '../../icons/bold';
import italicIcon from '../../icons/italic';
import underlineIcon from '../../icons/underline';

const INLINE_BUTTONS = [
    {
        label: 'B',
        style: 'BOLD',
        Icon: boldIcon,
        description: 'Bold'
    },
    {
        label: 'I',
        style: 'ITALIC',
        Icon: italicIcon,
        description: 'Italic'
    },
    {
        label: 'U',
        style: 'UNDERLINE',
        Icon: underlineIcon,
        description: 'Underline'
    },
    {
        label: 'Hi',
        style: 'HIGHLIGHT',
        Icon: underlineIcon,
        description: 'Highlight selection'
    }
];

const InlineToolbar = ({ onToggle, editorState }:Object) => {
    const currentStyle = editorState.getCurrentInlineStyle();
    return (
        <div>
            {INLINE_BUTTONS.map(item =>
                <StyleButton
                    key={item.label}
                    active={currentStyle.has(item.style)}
                    label={item.label}
                    onToggle={onToggle}
                    style={item.style}
                    Icon={item.Icon}
                />
            )}
        </div>
    );
};

InlineToolbar.propTypes = {
    editorState: PropTypes.shape({
        _immutable: PropTypes.object
    }).isRequired,
    onToggle: PropTypes.func.isRequired
};

export default InlineToolbar;
