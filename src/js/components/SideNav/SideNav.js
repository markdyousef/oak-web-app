import React, { Component, PropTypes } from 'react';

import css from './SideNav.css';

class SideNav extends Component {
    static propTypes = {};
    static defaultProps = {};
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.container}>
                SIDENAV
            </div>
        );
    }
}

export default SideNav;
