// @flow
import { connect } from 'react-redux';
import MessageStats from '../components/MessageStats';
// import { getChannelMessages } from '../actions/index';

const TEAM = 'clai';

const mapStateToProps = (state: Object, ownProps: Object) => {
    const { channel, messages } = ownProps;

    // const data = getChannelMessages(TEAM, channel).data;
    const data = {
        channel,
        messages
    };

    return data;
};

const mapDispatchToProps = (dispatch: Function) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MessageStats);
