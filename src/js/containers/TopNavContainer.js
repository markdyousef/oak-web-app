import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import TopNav from '../components/TopNav';

const getUser = gql`
    query me {
        me {
            avatar {
                urlThumb64
            }
        }
    }
`;

export default compose(
    graphql(getUser)
)(TopNav);
