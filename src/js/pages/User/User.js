import React, { Component, PropTypes } from 'react';
import Admin from '../../components/Admin';

import css from './User.css';

class User extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.container}>
                <Admin />
            </div>
        );
    }
}

export default User;
