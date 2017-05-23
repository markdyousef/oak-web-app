// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { card, comments, labels } from '../store/actions';
import { CardDetail, wrapper } from '../components/CardDetail';

const getCard = gql`
    query getCard($id: ID!) {
        seed(id: $id) {
            id
            name
            content
        }
    }
`;

const mapStateToProps = (state: Object, ownProps: Object) => {
    // const { data: { seed } } = ownProps;
    return {
        card: state.card,
        comments: state.comments,
        showLabels: state.labels.get('showLabels'),
        shouldUpdate: state.card.get('shouldUpdate'),
        isLoading: state.card.get('isLoading')
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
            })),
            dispatch(card.updateCard({
                key: 'shouldUpdate',
                value: true
            }))
        },
        updateComments: (field: Field) =>
            dispatch(comments.updateComments(field)),
        updateLabels: (field: Field) =>
            dispatch(labels.updateLabels(field)),
        updateCardContent: (content:string) =>
            dispatch(card.setCardContent(content)),
        addImage: (image: Object) =>
            dispatch(card.addCardImage(image))
    }
);

const WrappedCompoenent = wrapper(CardDetail);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    graphql(getCard, {
        skip: props => !props.params.cardId,
        options: props => ({ variables: { id: props.params.cardId } }),
        props: ({ data: { seed, loading } }) =>
            ({ seed, loading })
    })
)(WrappedCompoenent);
