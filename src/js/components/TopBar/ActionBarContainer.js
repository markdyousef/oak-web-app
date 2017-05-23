// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { labels, card, comments } from '../../store/actions';
import ActionBar from './ActionBar';
import { getTeam } from '../../utils';
import withAnalytics from './TopBarAnalytics';

const getCollectionList = gql`
    query topNav($teamId: ID!) {
        groves(teamId: $teamId) {
            id
            name
        }
    }
`;

const createCardDetail = gql`
    mutation createCardDetail($groveId: ID!, $name: String!, $content: String, $coverId: ID) {
        createSeed(groveId: $groveId, name: $name, content: $content, coverId: $coverId) {
            id
            content
        }
    }
`;

const updateCardDetail = gql`
    mutation updateCardDetail($id: ID!, $content: String!, $coverId: ID) {
        updateSeed(id: $id, content: $content, coverId: $coverId) {
            id
            content
        }
    }
`;

const mapStateToProps = (state: Object) => (
    {
        cardId: state.card.get('cardId'),
        collectionId: state.card.get('collectionId'),
        card: state.card,
        comments: state.comments,
        showLabels: state.labels.get('showLabels'),
        showComments: state.comments.get('showComments')
    }
);

type Field = {
    key: string,
    value: string
}

const mapDispatchToProps = (dispatch: Function) => (
    {
        updateLabels: (field: Field) =>
            dispatch(labels.updateLabels(field)),
        updateCard: (key: string, value: any) => {
            const field = { key, value };
            dispatch(card.updateCard(field))
        },
        updateCardContent: (content: string) =>
            dispatch(card.setCardContent(content)),
        onShowComments: (show: bool) =>
            dispatch(comments.updateComments({
                key: 'showComments',
                value: show
            }))
    }
);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    graphql(getCollectionList, {
        options: () => ({ variables: { teamId: getTeam() } }),
        props: ({ ownProps, data: { loading, groves } }) => ({
            data: { loading, collections: groves || [] }
        })
    }),
    graphql(createCardDetail, {
        props: ({ ownProps, mutate }) => ({
            create: (groveId, name, content, coverId) =>
                mutate({ variables: { groveId, name, content, coverId } })
                    .then(res => {
                        const id = res.data.createSeed.id;
                        ownProps.updateCard('message', null);
                        ownProps.updateCard('isLoading', false);
                        ownProps.updateCard('shouldUpdate', true);
                        ownProps.updateCard('cardId', id);
                        ownProps.updateCard('isSaved', true);
                        return id;
                    })
                    .catch((err) => {
                        const message = {
                            type: 'error',
                            message: "We couldn't create your card"
                        };
                        ownProps.updateCard('message', message);
                        ownProps.updateCard('isLoading', false);
                    })
        })
    }),
    graphql(updateCardDetail, {
        props: ({ ownProps, mutate }) => ({
            update: (id:string, content:string, coverId:string) =>
                mutate({ variables: { id, content, coverId } })
                    .then(res => {
                        const { id, content } = res.data.updateSeed;
                        ownProps.updateCard('shouldUpdate', true);
                        ownProps.updateCardContent(content);
                        ownProps.updateCard('message', null);
                        ownProps.updateCard('isLoading', false);
                        ownProps.updateCard('isSaved', true);
                        return id;
                    })
                    .catch(() => {
                        const message = {
                            type: 'error',
                            message: "We couldn't update your card"
                        };
                        ownProps.updateCard('message', message);
                        ownProps.updateCard('isLoading', false);
                    })
        })
    }),
)(withRouter(withAnalytics(ActionBar)));
