// @flow
import React, { Component } from 'react';

import TeamStats from '../../containers/TeamStatsContainer';
import TopNav from '../../containers/TopNavContainer';
import TeamMembers from '../../containers/TeamMembersContainer';

import css from './Team.css';

class Team extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.container}>
                <TopNav />
                <div className={css.teamMembers}>
                    <h1>MASTERMIND</h1>
                    <h3>MEMBERS:</h3>
                    <TeamMembers />
                </div>
                <div className={css.teamStats}>
                    <h3>CHANNELS:</h3>
                    <TeamStats />
                </div>
            </div>
        );
    }
}

export default Team;
