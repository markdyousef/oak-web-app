// @flow
import { connect } from 'react-redux';
import ChannelDetail from '../components/ChannelDetail';
import { getChannel } from '../actions/index';

const TEAM = 'clai';

const mapStateToProps = (state: Object) => (
    {
        team: state.team.get('name')
    }
);

const mapDispatchToProps = (dispatch: Function) => (
    {
        getChannel: (team, channelId) => dispatch(getChannel(team, channelId))
    }
);


export default connect(mapStateToProps, mapDispatchToProps)(ChannelDetail);
