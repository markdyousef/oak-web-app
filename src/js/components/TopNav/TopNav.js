import React, { Component, PropTypes } from 'react';

import css from './TopNav.css';
import logo from '../../../img/full_blue.png';
import Avatar from '../shared/Avatar';

const IMG = '//style.anu.edu.au/_anu/4/images/placeholders/person.png'
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
                    {/* <h1>TEAMS</h1> */}
                </div>
                <div className={css.navRight}>
                    <span onClick={() => console.log('click')}>
                        <Avatar img={IMG} />
                    </span>
                </div>
            </nav>
        );
    }
}

export default TopNav;
