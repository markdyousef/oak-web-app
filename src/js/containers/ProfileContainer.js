// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Profile from '../pages/Profile';

const getProfile = gql`
    query me {
        me {
            id
            name
            username
        }
    }
`;

export default compose(
    graphql(getProfile)
)(Profile);
