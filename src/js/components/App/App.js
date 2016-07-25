import React, { Component, PropTypes } from 'react';

import css from './App.css';


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
            <div className={css.container}>
                {this.props.children}
            </div>
        );
    }
}

export default App;
