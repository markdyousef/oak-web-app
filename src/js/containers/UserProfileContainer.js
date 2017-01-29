// @flow
import { connect } from 'react-redux';

import UserProfile from '../components/UserProfile';

const mapStateToProps = (state: Object, ownProps: Object) => (
    {
        userId: ownProps.userId
    }
);

const mapDispatchToProps = (dispatch: Function) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
