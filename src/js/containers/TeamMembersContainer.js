// @flow
import { connect } from 'react-redux';
import { getMembers } from '../actions';
import TeamMembers from '../components/TeamMembers';

const mapStateToProps = (state: Object) => (
    {
        team: state.members.get('team'),
        members: state.members.get('members').toJS()
    }
);

const mapDispatchToProps = (dispatch: Function) => (
    {
        getMembers: (team: String) => dispatch(getMembers(team))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(TeamMembers);
