import React, { Component, PropTypes } from 'react';

import css from './TeamMembers.css';

class TeamMembers extends Component {
    static propTypes = {
    }
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.container}>
                <h1>Members</h1>
            </div>
        );
    }
}

export default TeamMembers;
