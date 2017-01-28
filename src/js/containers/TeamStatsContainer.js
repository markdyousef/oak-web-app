// @flow
import { connect } from 'react-redux';
import BaseStats from '../components/BaseStats';
import { getTeam } from '../actions';

const mapStateToProps = (state: Object, ownProps: Object) => {
    const TEAM = 'clai';
    const data = getTeam(TEAM).data;

    return { data };
};

const mapDispatchToProps = (dispatch: Function) => (
    {

    }
);

export default connect(mapStateToProps, mapDispatchToProps)(BaseStats);
