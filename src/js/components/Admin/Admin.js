// @flow
import React, { Component, PropTypes } from 'react';
import CreateTeam from './CreateTeam';

import css from './Admin.css';

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            teamName: ''
        };
    }
    render() {
        const { teamName } = this.state;
        return (
            <div className={css.container}>
                <CreateTeam
                    onChange={value => this.setState({ teamName: value })}
                    onSubmit={() => {}}
                    teamName={teamName}
                />
            </div>
        );
    }
}

export default Admin;
