import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import css from './TopNav.css';
import Avatar from '../shared/Avatar';

const IMG = '//style.anu.edu.au/_anu/4/images/placeholders/person.png';
class TopNav extends Component {
    static propTypes = {
        team: PropTypes.bool
    }
    static defaultProps = {
        team: null
    }
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { team } = this.props;
        // differ between routes inside team and outside
        const settingsRoute = (team) ? '/my-settings' : 'settings';
        const profileRoute = (team) ? '/my-profile' : 'profile';
        return (
            <nav className={css.container}>
                <div className={css.navLeft}>
                </div>
                <div className={css.navRight}>
                    <Link to={settingsRoute} className={css.action}>
                        <div />
                    </Link>
                    <Link to={profileRoute} className={css.action}>
                        <Avatar img={IMG} />
                    </Link>
                </div>
            </nav>
        );
    }
}

export default TopNav;
