// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import SideNav from '../components/SideNav';
import { getTeam } from '../utils';

const getSideNav = gql`
    query groves($teamId: ID!) {
        groves(teamId: $teamId) {
            id
            title
        }
    }
`;

export default compose(
    graphql(getSideNav, {
        name: 'data',
        options: () => ({ variables: { teamId: getTeam() } })
    })
)(SideNav);
