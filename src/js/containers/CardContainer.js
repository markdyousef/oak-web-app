import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import Card from '../components/Card';
import { card } from '../store/actions';

const removeSeed = gql`
    mutation removeSeed($id: ID!) {
        removeSeed(id: $id)
    }
`;

const likeSeed = gql`
    mutation likeSeed($id: ID!) {
        likeSeed(id: $id)
    }
`;

const unlikeSeed = gql`
    mutation unlikeSeed($id: ID!) {
        unlikeSeed(id: $id)
    }
`;

const mapDispatchToProps = (dispatch: Function) => (
    {
        updateCard: (field:Object) => dispatch(card.updateCard(field))
    }
);

export default compose(
    connect(null, mapDispatchToProps),
    graphql(removeSeed, {
        props: ({ mutate }) => ({
            removeCard: (id:String) => mutate({ variables: { id } })
        })
    }),
    graphql(likeSeed, {
        props: ({ mutate }) => ({
            likeCard: (id:String) => mutate({ variables: { id } })
        })
    }),
    graphql(unlikeSeed, {
        props: ({ mutate }) => ({
            unlikeCard: (id:String) => mutate({ variables: { id } })
        })
    })
)(Card);
