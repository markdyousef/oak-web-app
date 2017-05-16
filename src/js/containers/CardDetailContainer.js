// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { card, comments, labels } from '../store/actions';
import { CardDetail, wrapper } from '../components/CardDetail';

const getCard = gql`
    query getCard($id: ID!) {
        me {
            id
            name
            username
            avatar {
                id
                urlThumb64
            }
            gravatar
        }
        seed(id: $id) {
            id
            name
            content
        }
    }
`;

const mapStateToProps = (state: Object) => {
    return {
        card: state.card,
        comments: state.comments,
        showLabels: state.labels.get('showLabels'),
        shouldUpdate: state.card.get('shouldUpdate')
    };
};

type Field = {
    key: string,
    value: string
}
const mapDispatchToProps = (dispatch: Function) => (
    {
        updateCard: (field:Field) =>
            dispatch(card.updateCard(field)),
        clearCard: () => {
            dispatch(card.clearCard());
            dispatch(comments.updateComments({
                key: 'showComments',
                value: false
            }))
        },
        updateComments: (field: Field) =>
            dispatch(comments.updateComments(field)),
        updateLabels: (field: Field) =>
            dispatch(labels.updateLabels(field)),
        updateCardContent: (content:string) =>
            dispatch(card.setCardContent(content))
    }
);

const mapQueriesToProps = ({ ownProps, state }) => {
    console.log(ownProps, state);
}

const WrappedCompoenent = wrapper(CardDetail);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    graphql(getCard, {
        name: 'data',
        skip: props => !props.params.cardId,
        options: props => ({ variables: { id: props.params.cardId } }),
        // props: ({ ownProps, data }) => {
        //     const { seed, loading } = data;
        //     console.log(loading);
        //     if (loading || !seed) return;
        //
        //     const { name, content } = seed;
        //
        //     ownProps.updateCard({ key: 'name', value: 'ccol'});
        //     // console.log(content);
        //     // ownProps.updateCardContent(content);
        // }
    })
)(WrappedCompoenent);
