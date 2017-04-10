// @flow
import { Block } from './constants';
import ImageBlock from '../components/Blocks/Image';
import EmbedBlock from '../components/Blocks/Embed';
import AtomicBlock from '../components/Blocks/Atomic';
import SeparatorBlock from '../components/Blocks/Separator';

export default (editorState:Object, setEditorState:Function) => (contentBlock:Object) => {
    const type = contentBlock.getType();

    // TODO: Image always comes as type.unstyled
    switch (type) {
    case Block.IMAGE:
        return {
            component: ImageBlock,
            props: {
                editorState,
                setEditorState
            }
        };
    case Block.ATOMIC:
        return {
            component: AtomicBlock,
            editable: false,
            props: {
                components: {
                    embed: EmbedBlock,
                    separator: SeparatorBlock,
                    image: ImageBlock
                }
            }
        };
    default:
        return null;
    }
};
