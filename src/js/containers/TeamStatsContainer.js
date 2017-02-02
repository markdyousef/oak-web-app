// @flow
import { connect } from 'react-redux';
import BaseStats from '../components/BaseStats';
import { getTeam, getChannels } from '../actions';

const mapStateToProps = (state: Object) => {
    return {
        name: state.team.get('name'),
        channels: state.channel.get('channels').toJS()
    };
};

const mapDispatchToProps = (dispatch: Function) => (
    {
        getTeam: (name: String) => {
            dispatch(getTeam(name));
            dispatch(getChannels(name));
        }
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(BaseStats);
