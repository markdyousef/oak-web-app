// @flow

/**
*   Returns the 'boundingClientRect' of the passed selection
**/
export const getSelectionRect = (selected:Object) => {
    const currentRect = selected.getRangeAt(0).getBoundingClientRect();
    let rect = currentRect && currentRect.top ? currentRect : selected.getRangeAt(0).getClientRects()[0];

    if (!rect) {
        if (selected.anchorNode && selected.anchorNode.getBoundingClientRect) {
            rect = selected.anchorNode.getBoundingClientRect();
            rect.isEmptyLine = true;
        } else {
            return null;
        }
    }
    return rect;
};

/**
*   returns the native selection node
**/
export const getSelection = (window:Object) => {
    let selection = null;

    if (window.getSelection) {
        selection = window.getSelection();
    } else if (window.document.getSelection) {
        selection = window.document.getSelection();
    } else if (window.document.selection) {
        selection = window.document.selection.createRange().text;
    }
    return selection;
};

/**
* Recursively finds the DOM Element of the block where the cursor is currently present
**/
export const getSelectedBlockNode = (window:Object) => {
    const selection = window.getSelection();

    if (selection.rangeCount === 0) return null;

    let node = selection.getRangeAt(0).startContainer;

    do {
        if (node.getAttribute && node.getAttribute('data-block') === 'true') {
            return node;
        }

        node = node.parentNode;
    } while (node !== null);

    return null;
};
