// @flow
import { connect } from 'react-redux';

import UserProfile from '../components/UserProfile';
import  { getInsight } from '../actions'

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
        getInsight: userId => dispatch(getInsight('mastermind', userId))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
