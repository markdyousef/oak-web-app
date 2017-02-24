// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import SideNav from '../components/SideNav';

const getSideNav = gql`
    query groves {
        groves {
            id
            title
        }
    }
`;

export default compose(
    graphql(getSideNav)
)(SideNav);
