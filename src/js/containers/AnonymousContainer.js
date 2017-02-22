// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-router';

class Anonymous extends Component {
    static propTypes = {
        router: PropTypes.shape({
            replace: PropTypes.func.isRequired
        }),
        isAuthenticated: PropTypes.bool.isRequired,
        isAuthenticating: PropTypes.bool.isRequired
    };
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { isAuthenticated, isAuthenticating } = this.props;
        if (!isAuthenticated && !isAuthenticating) {
            return (
                <div className={css.container}>
                    LOGIN
                </div>
            );
        }
        return null;
    }
}

const mapStateToProps = (state: Object) => (
    {
        isAuthenticated: state.auth.get('isAuthenticated') || false,
        isAuthenticating: state.auth.get('isAuthenticating') || false
    }
);

export default connect(mapStateToProps)(Anonymous)
