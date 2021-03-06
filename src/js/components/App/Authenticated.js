// @flow
import React, { Component, PropTypes } from 'react';

// Localstorage token
const token = localStorage.authToken;

class Authenticated extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        router: PropTypes.shape({
            replace: PropTypes.func.isRequired
        }).isRequired
    };
    constructor() {
        super();
        this.state = {};
    }
    componentWillMount() {
        const { router } = this.props;
        if (!token) {
            router.replace({
                pathname: '/login'
            });
        }
    }
    render() {
        if (!token) return null;

        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Authenticated;
