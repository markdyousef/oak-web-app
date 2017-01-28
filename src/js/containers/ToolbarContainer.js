import { connect } from 'react-redux';
import Toolbar from '../components/Toolbar';
import { getTeam } from '../actions';

const mapStateToProps = (state: Object) => {
    const data = {};
    data.filters = [];

    const teamFilter = {
        name: 'team',
        id: 'team',
        options: [
            {
                name: 'clai'
            },
            {
                name: 'mastermind'
            },
            {
                name: 'krispa'
            },
            {
                name: 'travel'
            },
            {
                name: 'trade'
            }
        ]
    };

    data.filters.push(teamFilter);
    return {
        data,
        channels: state.team.get('channels').toJS()
    };
};

const mapDispatchToProps = (dispatch: Function) => (
    {
        selectTeam: name => dispatch(getTeam(name))
    }
);


export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
