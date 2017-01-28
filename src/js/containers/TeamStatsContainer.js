// @flow
import { connect } from 'react-redux';
import BaseStats from '../components/BaseStats';
import { getTeam } from '../actions';

const mapStateToProps = (state: Object, ownProps: Object) => {
    return {
        channels: state.team.get('channels').toJS(),
        name: state.team.get('name')
    }
};

const mapDispatchToProps = (dispatch: Function) => (
    {
        getTeam: (name: String) => dispatch(getTeam(name))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(BaseStats);
