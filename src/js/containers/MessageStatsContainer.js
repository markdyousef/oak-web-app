// @flow
import { connect } from 'react-redux';
import MessageStats from '../components/MessageStats';
// import { getChannelMessages } from '../actions/index';

const mapStateToProps = (state: Object) => (
    {
        isLoading: state.channel.get('isLoading'),
        data: state.channel.get('data').toJS(),
        channel: state.channel.get('name')
    }
);

const mapDispatchToProps = (dispatch: Function) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MessageStats);
