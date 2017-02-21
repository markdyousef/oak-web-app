import React, { Component, PropTypes } from 'react';
import TopNav from '../TopNav';
import SideNav from '../SideNav';

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
                <SideNav />
                <div className={css.right}>
                    <TopNav />
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
