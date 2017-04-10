import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { getVisibleSelectionRect } from 'draft-js';
import BlockToolbar from './BlockToolbar';
import InlineToolbar from './InlineToolbar';
import { actionsColor } from '../../styles/colors';
import { boxLayout } from '../../styles/layouts';

// Toolbar height
// const toolbarHeight = 200;

const Container = styled.div`
    width: 200px;
    ${''/* height: ${toolbarHeight}px; */}
    display: flex;
    flex-direction: column;
    ${boxLayout()};
    z-index: 2;
    transform: translate(-50%) scale(0);
    cursor: auto;
    &:after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        margin-left: -5px;
    }
`;

const getRelativeParent = (element) => {
    if (!element) {
        return null;
    }

    const position = window.getComputedStyle(element).getPropertyValue('position');
    if (position !== 'static') {
        return element;
    }

    return getRelativeParent(element.parentElement);
};

export default class Toolbar extends Component {
    static propTypes = {
        editorState: PropTypes.shape({
            _immutable: PropTypes.object
        }),
        toggleBlockType: PropTypes.func.isRequired,
        toggleInlineStyle: PropTypes.func.isRequired,
        focus: PropTypes.func.isRequired,
        showToolbar: PropTypes.bool.isRequired,
        editorNode: PropTypes.shape({
            props: PropTypes.object
        })
    };
    static defaultProps = {
        editorState: {},
        editorNode: {}
    }
    constructor() {
        super();
        this.state = {
            position: {}
        };
    }
    componentWillReceiveProps(nextProps) {
        setTimeout(() => {
            let position;
            if (nextProps.showToolbar) {
                const relativeParent = getRelativeParent(this.toolbar.parentElement);
                const relativeRect = relativeParent ?
                    relativeParent.getBoundingClientRect()
                    :
                    document.body.getBoundingClientRect();
                position = {
                    top: (this.selectionRect.top - relativeRect.top - 30),
                    // left: (this.selectionRect.left - relativeRect.left) - (this.selectionRect.width / 2),
                    left: (this.selectionRect.left - 300),
                    transform: 'translate(-50%) scale(1)',
                    transition: 'transform 0.15s cubic-brezier(0.3, 1.2, 0.2, 1)'
                };
                // console.log('left: ' + (this.selectionRect.left - 300));
                // console.log('top: ' + (this.selectionRect.top - relativeRect.top));
                this.props.focus();
            } else {
                position = { transform: 'translate(-50%) scale(0)' };
            }
            this.setState({ position });
        });
    }
    componentDidUpdate() {
        this.selectionRect = getVisibleSelectionRect(window);
        this.props.focus();
    }
    render() {
        const { toggleBlockType, editorState, showToolbar, toggleInlineStyle } = this.props;
        const { position } = this.state;
        return (
            <Container showToolbar={showToolbar} style={position} ref={(element) => { this.toolbar = element; }}>
                <BlockToolbar
                    onToggle={toggleBlockType}
                    editorState={editorState}
                />
                <InlineToolbar
                    onToggle={toggleInlineStyle}
                    editorState={editorState}
                />
            </Container>
        );
    }
}
