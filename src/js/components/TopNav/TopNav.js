import React, { Component } from 'react';
import { Link } from 'react-router';

import css from './TopNav.css';
import logo from '../../../img/full_blue.png';
import Avatar from '../shared/Avatar';
import teamIcon from '../../../img/multiple-users-silhouette.png';

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
                </div>
                <div className={css.navRight}>
                    <Link to="/">
                        <img src={teamIcon} alt="team" />
                    </Link>
                    <Link to="/me" className={css.myProfile}>
                        <Avatar img={IMG} />
                    </Link>
                </div>
            </nav>
        );
    }
}

export default TopNav;
