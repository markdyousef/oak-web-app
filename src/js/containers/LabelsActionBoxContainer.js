// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import LabelsActionBox from '../components/LabelsActionBox';

const createLabel = gql`
    mutation createLabel($groveId: ID!, $name: String!, $color: String!) {
        createLabel(groveId: $groveId, name: $name, color: $color) {
            id
            name
            color
        }
    }
`;

const addSeedLabel = gql`
    mutation addSeedLabel($seedId: ID!, $labelId: ID!) {
        addSeedLabel(seedId: $seedId, labelId: $labelId)
    }
`;

const removeSeedLabel = gql`
    mutation removeSeedLabel($seedId: ID!, $labelId: ID!) {
        removeSeedLabel(seedId: $seedId, labelId: $labelId)
    }
`;

const getSeedLabels = gql`
    query seed($id: ID!) {
        seed(id: $id) {
            labels {
                id
                name
                color
            }
        }
    }
`;

const getGroveLabels = gql`
    query grove($id: ID!) {
        grove(id: $id) {
            labels {
                id
                name
                color
            }
        }
    }
`;

export default compose(
    graphql(getSeedLabels, {
        name: 'card',
        options: ownProps => ({ variables: { id: ownProps.cardId } })
    }),
    graphql(getGroveLabels, {
        name: 'collection',
        options: ownProps => ({ variables: { id: ownProps.collectionId } })
    }),
    graphql(createLabel, {
        props: ({ mutate }) => ({
            createLabel: (groveId, name, color) => mutate({ variables: { groveId, name, color } })
        })
    }),
    graphql(addSeedLabel, {
        props: ({ mutate }) => ({
            addLabel: (seedId, labelId) => mutate({ variables: { seedId, labelId } })
        })
    }),
    graphql(removeSeedLabel, {
        props: ({ mutate }) => ({
            removeLabel: (seedId, labelId) => mutate({ variables: { seedId, labelId } })
        })
    })
)(LabelsActionBox);
