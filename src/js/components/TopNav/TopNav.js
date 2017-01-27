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
                    <span>
                        <img src={logo}/>
                    </span>
                </div>
            </nav>
        );
    }
}

export default TopNav;
