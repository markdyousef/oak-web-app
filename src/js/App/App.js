import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import Index from './AppIndex.js';

// require('./app.css');

const styles = {
    height: '100%',
    background: '#333'
};

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const { content, sidebar } = this.props;

        return (
            <div style={styles}>
                <h1 className="welcome-header">Welcome to testing React!</h1>
                <div className="Sidebar">
                    {sidebar || <Sidebar />}
                </div>
                <div className="Content">
                    {content || <Index />}
                </div>
            </div>
        );
    }
}

export default App;
