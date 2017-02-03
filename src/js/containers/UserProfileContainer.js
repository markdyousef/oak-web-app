// @flow
import { connect } from 'react-redux';

import UserProfile from '../components/UserProfile';

const mapStateToProps = (state: Object, ownProps: Object) => {
    const userId = ownProps.userId;
    const members = state.members.get('members').toJS();

    const user = members.filter(member => member.id === userId)[0];
    return (
    {
        userId,
        user
    }
    );
};

const mapDispatchToProps = (dispatch: Function) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
