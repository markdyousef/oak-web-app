// @flow
import { connect } from 'react-redux';

import MessageStats from '../components/MessageStats';

const mapStateToProps = (state: Object, ownProps: Object) => {
    return state;
}

const mapDispatchToProps = (dispatch: Function) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MessageStats);
