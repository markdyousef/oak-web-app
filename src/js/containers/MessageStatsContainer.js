// @flow
import { connect } from 'react-redux';
import MessageStats from '../components/MessageStats';
// import { getChannelMessages } from '../actions/index';

const mapStateToProps = (state: Object) => (
    {
        // messages: state.channel.data.get('messages').toJS(),
        channel: state.channel.get('name')
    }
);

const mapDispatchToProps = (dispatch: Function) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MessageStats);
