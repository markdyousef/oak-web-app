// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Collections from '../components/Collections';
import { getTeam, withAnalytics } from '../utils';

const getCollections = gql`
    query groves($teamId: ID!) {
        groves(teamId: $teamId) {
            id
            name
            description
            creator {
                id
                avatar {
                    id
                    urlThumb64
                }
                gravatar
            }
        }
    }
`;

export default compose(
    graphql(getCollections, {
        name: 'data',
        options: () => ({ variables: { teamId: getTeam() } }),
        props: ({ data: { groves, loading, refetch } }) => ({ groves, loading, refetch })
    })
)(withAnalytics(Collections));
