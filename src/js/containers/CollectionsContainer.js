// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Collections from '../components/Collections';
import { getTeam } from '../utils';

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
        options: () => ({ variables: { teamId: getTeam() } })
    })
)(Collections);
