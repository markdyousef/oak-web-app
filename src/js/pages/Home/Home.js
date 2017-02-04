// @flow
import React, { Component } from 'react';

import TeamStats from '../../containers/TeamStatsContainer';
import TopNav from '../../containers/TopNavContainer';
import TeamMembers from '../../containers/TeamMembersContainer';

import css from './Home.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.container}>
                <TopNav />
                <div className={css.teamMembers}>
                    <h1>TEAM MEMBERS:</h1>
                    <TeamMembers />
                </div>
                <div className={css.teamStats}>
                    <TeamStats />
                </div>
            </div>
        );
    }
}

export default Home;
