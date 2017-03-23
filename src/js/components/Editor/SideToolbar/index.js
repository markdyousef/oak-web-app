import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import buttonStyles from './buttonStyles.css';
import toolbarStyles from './toolbarStyles.css';
import blockTypeSelectStyles from './blockTypeSelectStyles.css';

const sideToolbarPlugin = createSideToolbarPlugin({
    theme: { buttonStyles, toolbarStyles, blockTypeSelectStyles }
});


export default sideToolbarPlugin;
