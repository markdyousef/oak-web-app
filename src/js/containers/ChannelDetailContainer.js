// @flow
import { connect } from 'react-redux';
import ChannelDetail from '../components/ChannelDetail';
import { getChannel } from '../actions/index';

const TEAM = 'clai';

const mapStateToProps = (state: Object, ownProps: Object) => {
    const channelId = ownProps.params.channelId;

    const data = getChannel(TEAM, channelId).data;

    return { data };
};

const mapDispatchToProps = (dispatch: Function) => ({});


export default connect(mapStateToProps, mapDispatchToProps)(ChannelDetail);
