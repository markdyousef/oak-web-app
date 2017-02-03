// @flow
import { connect } from 'react-redux';
import ChannelDetail from '../components/ChannelDetail';
import { getChannel } from '../actions/index';

const mapStateToProps = (state: Object) => (
    {
        team: state.team.get('name'),
        name: state.channel.get('name'),
        data: state.channel.get('activeChannel').toJS(),
        tone: state.channel.get('channelTone').toJS(),
        isLoading: state.channel.get('isLoading')
    }
);

const mapDispatchToProps = (dispatch: Function) => (
    {
        getChannel: (team, channelId) => dispatch(getChannel(team, channelId))
    }
);


export default connect(mapStateToProps, mapDispatchToProps)(ChannelDetail);
