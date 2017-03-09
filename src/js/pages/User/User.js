import React, { Component, PropTypes } from 'react';
import Admin from '../../components/Admin';
import TopNav from '../../components/TopNav';

import css from './User.css';

class User extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.container}>
                <TopNav />
                <Admin />
            </div>
        );
    }
}

export default User;
