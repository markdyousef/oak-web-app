// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Collections from '../components/Collections';

const getCollections = gql`
    groves {
        id
        title
    }
`;

export default compose(
    graphql(getCollections)
)(Collections);
