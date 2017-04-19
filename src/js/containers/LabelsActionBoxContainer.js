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
    graphql(getGroveLabels, {
        name: 'data',
        options: ownProps => ({ variables: { id: ownProps.collectionId } })
    }),
    graphql(createLabel, {
        props: ({ mutate }) => ({
            createLabel: (groveId:string, name:string, color:string) => mutate({ variables: { groveId, name, color } })
        })
    })
)(LabelsActionBox);
