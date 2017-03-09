import React, { Component, PropTypes } from 'react';
import TopNav from '../../components/TopNav';

import css from './User.css';

class User extends Component {
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
                <TopNav />
                {this.props.children}
            </div>
        );
    }
}

export default User;
