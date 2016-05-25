import React, { Component, PropTypes } from 'react';
import Sidebar from './Sidebar.js';
import Index from './AppIndex.js';
import css from './app.css';

const styles = {
    height: '100%',
    background: '#333'
};

class App extends Component {
    static propTypes = {
        content: PropTypes.object,
        sidebar: PropTypes.object
    }

    constructor() {
        super();
        this.state = {};
    }

    render() {
        const { content, sidebar } = this.props;

        return (
            <div style={styles} className={css.container}>
                <h1 className="welcome-header">Welcome to testing React!</h1>
                <div className="Sidebar">
                    {sidebar || <Sidebar onMount={() => {}} isActive />}
                </div>
                <div className="Content">
                    {content || <Index />}
                </div>
            </div>
        );
    }
}

export default App;
