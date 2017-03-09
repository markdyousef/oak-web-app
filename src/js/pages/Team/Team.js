// @flow
import React, { Component, PropTypes } from 'react';
import SideNav from '../../containers/SideNavContainer';

import css from './Team.css';

class Team extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.container}>
                <SideNav />
                <div className={css.right}>
                    {this.props.children}
                </div>
            </div>

        );
    }
}

export default Team;
