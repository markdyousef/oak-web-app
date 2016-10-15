import React, { Component } from 'react';

import logo from 'img/clai-logo.png';

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
                <img src={logo} role="presentation" />
            </div>
        );
    }
}

export default Home;
