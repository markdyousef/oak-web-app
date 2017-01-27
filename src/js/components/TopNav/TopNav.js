import React, { Component, PropTypes } from 'react';

import css from './TopNav.css';
import logo from '../../../img/full_blue.png';

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
                <div className={css.navLeft}>
                    <img src={logo} alt="logo" />
                    <h1>DASHBOARD</h1>
                </div>
            </nav>
        );
    }
}

export default TopNav;
