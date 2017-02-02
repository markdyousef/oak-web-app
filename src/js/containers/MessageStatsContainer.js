// @flow
import { connect } from 'react-redux';
import MessageStats from '../components/MessageStats';
// import { getChannelMessages } from '../actions/index';

const mapStateToProps = (state: Object) => (
    {
        isLoading: state.channel.get('isLoading'),
        messages: state.channel.get('activeChannel').get('messages'),
        channel: state.channel.get('team')
    }
);

const mapDispatchToProps = (dispatch: Function) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MessageStats);
