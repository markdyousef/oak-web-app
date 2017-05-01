// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux'
import SideNav from '../components/SideNav';
import { getTeam } from '../utils';
import { collections } from '../store/actions';

const getSideNav = gql`
    query groves($teamId: ID!) {
        groves(teamId: $teamId) {
            id
            name
        }
    }
`;

const mapStateToProps = (state:Object) => (
    {
        shouldUpdate: state.collection.get('shouldUpdate')
    }
);

const mapDispatchToProps = (dispatch: Function) => (
    {
        setUpdate: (shouldUpdate: bool) =>
            dispatch(collections.setUpdate(shouldUpdate))
    }
);

export default compose(
    graphql(getSideNav, {
        name: 'data',
        options: () => ({ variables: { teamId: getTeam() } })
    }),
    connect(mapStateToProps, mapDispatchToProps)
)(SideNav);
