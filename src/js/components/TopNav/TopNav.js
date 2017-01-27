import React, { Component, PropTypes } from 'react';

import css from './TopNav.css';

class TopNav extends Component {
    static propTypes = {
        user: PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    }
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <nav className={css.container}>
                <h1>Navigation</h1>
            </nav>
        );
    }
}

export default TopNav;
