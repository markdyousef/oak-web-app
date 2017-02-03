// @flow
import { connect } from 'react-redux';
import  { getInsight } from '../actions'

import UserProfile from '../components/UserProfile';

const mapStateToProps = (state: Object, ownProps: Object) => {
    const userId = ownProps.userId;
    const members = state.members.get('members').toJS();

    const user = members.filter(member => member.id === userId)[0];

    return (
    {
        userId,
        user,
        insights: state.insights.get('data').toJS()
    }
    );
};

const mapDispatchToProps = (dispatch: Function) => (
    {
        getInsight: (userId, otherId) => dispatch(getInsight('mastermind', userId, otherId))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
