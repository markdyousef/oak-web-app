// @flow
import React, { Component, PropTypes } from 'react';

// Localstorage token
const token = localStorage.authToken;

class Anonymous extends Component {
    static propTypes = {
        children: PropTypes.node,
        router: PropTypes.shape({
            replace: PropTypes.func.isRequired
        }).isRequired,
        isAuthenticated: PropTypes.bool.isRequired,
        isAuthenticating: PropTypes.bool.isRequired
    };
    constructor() {
        super();
        this.state = {};
    }
    componentWillMount() {
        const { router } = this.props;
        if (token && token.length > 0) {
            router.replace({
                pathname: '/'
            });
        }
    }
    render() {
        const { isAuthenticated, isAuthenticating } = this.props;
        if (!isAuthenticated && !isAuthenticating) {
            return (
                <div>
                    {this.props.children}
                </div>
            );
        }
        return null;
    }
}

export default Anonymous;
