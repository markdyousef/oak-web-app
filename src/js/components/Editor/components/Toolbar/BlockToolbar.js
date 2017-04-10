// @flow
import React, { PropTypes } from 'react';
import { RichUtils } from 'draft-js';
import StyleButton from '../StyleButton';
import h1Icon from '../../icons/h1';
import h2Icon from '../../icons/h2';
import qouteIcon from '../../icons/quote';
import listIcon from '../../icons/unorderedList';
import codeIcon from '../../icons/codeBlock';

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one', Icon: h1Icon },
  { label: 'H2', style: 'header-two', Icon: h2Icon },
  { label: 'Quote', style: 'blockquote', Icon: qouteIcon },
  { label: 'Bulleted List', style: 'unordered-list-item', Icon: listIcon },
  { label: 'Numbered List', style: 'ordered-list-item', Icon: listIcon },
  { label: 'Code Block', style: 'code-block', Icon: codeIcon }
];

const BlockToolbar = ({ onToggle, editorState }:Object) => {
    const blockType = RichUtils.getCurrentBlockType(editorState);
    return (
        <div>
            {BLOCK_TYPES.map(item =>
                <StyleButton
                    key={item.label}
                    active={item.style === blockType}
                    label={item.label}
                    onToggle={onToggle}
                    style={item.style}
                    Icon={item.Icon}
                />
            )}
        </div>
    );
};

BlockToolbar.propTypes = {
    editorState: PropTypes.shape({
        _immutable: PropTypes.object
    }).isRequired,
    onToggle: PropTypes.func.isRequired
};

export default BlockToolbar;
