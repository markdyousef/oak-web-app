// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router';
import { getTeam } from '../../utils';
import MainNav from './MainNav';

const getMainNav = gql`
    query topNav($teamId: ID!) {
        groves(teamId: $teamId) {
            id
            name
        }
    }
`;

export default compose(
    graphql(getMainNav, {
        name: 'data',
        options: () => ({ variables: { teamId: getTeam() } })
    })
)(withRouter(MainNav));
