import type { EditorState } from 'draft-js';

export type Creator = {
    username: string,
    gravatar: string,
    avatar: {
        id: string,
        urlThumb64: string
    }
}

type Data = {
    refetch: Function,
    loading: bool,
    me: ?{
        name: string,
        username: string,
        avatar: Object,
        gravatar: string

    },
    seed?: {
        id: string,
        content: ?string,
        labels: Array<Object>,
        comments: Array<Object>,
        creator: Creator
    }
}

export type Props = {
    create: Function,
    update: Function,
    addLabel: Function,
    removeLabel: Function,
    params: Object,
    data?: Data,
    router: Object,
    createComment: Function,
    setUpdate: (update: bool) => void
}

export type State = {
    cardId: ?string,
    collectionId: string,
    isLoading: bool,
    showComments: bool,
    editorState: EditorState,
    labels: Array<string>,
    comments: Array<Object>,
    message: ?{
        type: string,
        message: string,
        onClick?: Function
    },
    showEdit: bool,
    name: string,
    images: Array<Object>,
    failedComment: ?EditorState,
    creator: ?{
        name: string,
        username: string,
        avatar: Object,
        gravatar: string
    }
}

export type DefaultProps = {}
