// @flow
export type DefaultProps = {
    team: null,
    router: {}
};
export type Props = {
    team: ?bool,
    logout?: Function,
    router: {
        replace: Function,
        push: Function
    },
    params: {
        collectionId?: string
    },
    data: {
        loading: bool,
        me: {
            avatar: ?{
                urlThumb64: ?string
            },
            gravatar: ?string
        },
        groves: ?Array<Object>
    }
};
export type State = {
    showSettings: bool,
    showCollections: bool,
    showDialog: bool,
    showAdd: bool,
    collections: Array<Object>
};
