// @flow
import { connect } from 'react-redux';
import BaseStats from '../components/BaseStats';
import claiJson from '../../../../data/clai/slack_raw.json';
import mastermindJson from '../../../../data/mastermind/slack_raw.json';
import krispaJson from '../../../../data/krispa/slack_raw.json';
import travelJson from '../../../../data/travel/slack_raw.json';
import tradeX from '../../../../data/tradeX/slack_raw.json';

const mapStateToProps = (state, ownProps) => {
    const props = {};

    const { team } = ownProps;

    // assign team
    props.team = team;

    // get team data
    switch (team) {
    case 'clai':
        props.data = claiJson;
        break;
    case 'mastermind':
        props.data = mastermindJson;
        break;
    case 'krispa':
        props.data = krispaJson;
        break;
    case 'travel':
        props.data = travelJson;
        break;
    case 'tradeX':
        props.data = tradeX;
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
