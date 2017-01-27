// @flow
import { connect } from 'react-redux';
import BaseStats from '../components/BaseStats';
import claiJson from '../../../../data/clai/slack_raw.json';

const mapStateToProps = (state, ownProps) => {
    const props = {};

    const { team } = ownProps;
    // select team
    switch (team) {
    case 'clai':
        props.data = claiJson
        break;
    default:
        props.data = {};
        break;
    }

    return props;
};

const mapDispatchToProps = dispatch => (
    {

    }
);

export default connect(mapStateToProps, mapDispatchToProps)(BaseStats);
