import React, { Component } from 'react';
import { Link } from 'react-router';

import css from './TopNav.css';
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
                </div>
                <div className={css.navRight}>
                    <Link to="/profile" className={css.myProfile}>
                        <Avatar img={IMG} />
                    </Link>
                </div>
            </nav>
        );
    }
}

export default TopNav;
