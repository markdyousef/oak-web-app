// @flow
import { connect } from 'react-redux';
import ChannelDetail from '../components/ChannelDetail';

const mapStateToProps = (state: Object, ownProps: Object) => {
    const channelId = ownProps.params.channelId;
    return state;
}

const mapDispatchToProps = (dispatch: Function) => ({});


export default connect(mapStateToProps, mapDispatchToProps)(ChannelDetail);
