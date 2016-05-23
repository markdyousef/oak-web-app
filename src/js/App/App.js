import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import Index from './AppIndex.js';

require('./app.css');

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const { content, sidebar } = this.props;

        return (
            <div>
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
