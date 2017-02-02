// @flow
import { connect } from 'react-redux';
import { getMembers } from '../actions';
import TeamMembers from '../components/TeamMembers';

const mapStateToProps = (state: Object) => (
    {
        members: state.members.get('members')
    }
);

const mapDispatchToProps = (dispatch: Function) => (
    {
        getMembers: (team: String) => dispatch(getMembers(team))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(TeamMembers);
