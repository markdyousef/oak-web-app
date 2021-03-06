import React, { Component, PropTypes } from 'react';

class App extends Component {
    static propTypes = {
        children: PropTypes.node
    }

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default App;
