import React, { Component } from 'react';
import { Link } from 'react-router';

import css from './TopNav.css';
import logo from '../../../img/full_blue.png';
import Avatar from '../shared/Avatar';

const IMG = '//style.anu.edu.au/_anu/4/images/placeholders/person.png'
class TopNav extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <nav className={css.container}>
                <div className={css.navLeft}>
                    <img src={logo} alt="logo" />
                    <h1>MASTERMIND</h1>
                </div>
                <div className={css.navRight}>
                    <Link to="/">
                        <Avatar img={IMG} />
                    </Link>
                </div>
            </nav>
        );
    }
}

export default TopNav;
