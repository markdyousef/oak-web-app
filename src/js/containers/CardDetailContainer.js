// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import CardDetail from '../components/CardDetail';

const createSeed = gql`
    mutation createSeed($groveId: ID!, content: String!) {
        createSeed(groveId: $groveId, content: $content) {
            id
        }
    }
`;

export default compose(
    graphql(createSeed, {
        props: ({ mutate }) => ({
            create: (groveId: String, content: String) => mutate({ variables: { groveId, content } })
        })
    })
)(CardDetail);
