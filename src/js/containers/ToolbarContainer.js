import { connect } from 'react-redux';
import Toolbar from '../components/Toolbar';

const mapStateToProps = (state: Object, ownProps: Object) => {
    console.log(ownProps);
    return state;
}

const mapDispatchToProps = (dispatch: Function) => ({})


export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
