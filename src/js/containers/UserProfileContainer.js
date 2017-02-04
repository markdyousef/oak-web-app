// @flow
import { connect } from 'react-redux';
import { getInsight, getUser } from '../actions';

import UserProfile from '../components/UserProfile';

const mapStateToProps = (state: Object, ownProps: Object) => {
    const userId = ownProps.userId;
    const members = state.members.get('members').toJS();

    const user = members.filter(member => member.id === userId)[0];

    return (
    {
        userId,
        user,
        users: members,
        insight: state.user.get('insight').toJS(),
        insightOther: state.insights.get('insightOther').toJS(),
        tone: state.user.get('tone').toJS(),
        toneOther: state.insights.get('toneOther').toJS()
    }
    );
};

const mapDispatchToProps = (dispatch: Function) => (
    {
        getInsight: (userId, otherId) => dispatch(getInsight('mastermind', userId, otherId)),
        getUser: userId => dispatch(getUser('mastermind', userId))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
