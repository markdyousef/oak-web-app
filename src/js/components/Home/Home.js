import React, { Component } from 'react';

import css from './Home.css';


class Home extends Component {
    static propTypes = {}

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className={css.container}>
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;
