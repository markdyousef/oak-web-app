type Seed = {
    id: string,
    content: string,
    cover: Object,
    creator: Object,
    labels: Array <Object>,
    likes: Array<number>,
    comments: Array<Object>
}

type Data = {
    loading: bool,
    refetch: Function,
    me?: {
        likedSeeds: ?Array<Object>
    },
    grove?: {
        id: string,
        name: string,
        description: ?string,
        cover: ?Object,
        stats: ?Object,
        labels: ?Array<Object>
    },
    seeds?: Array<Seed>
}
export type DefaultProps = {};
export type Props = {
    params: {
        collectionId: string
    },
    router: {
        push: Function,
        replace: Function
    },
    data: Data,
    remove: Function,
    removeCard: Function,
    likeCard: Function,
    unlikeCard: Function,
    setUpdate: (type: string, update: bool) => void,
    shouldUpdate: bool
};
export type State = {
    showEdit: bool,
    showDetail: bool,
    cards: Array<Seed>,
    sortKey: string,
    labels: Array<Object>,
    filterVals: Array<string>
};
