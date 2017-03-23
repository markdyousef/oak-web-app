// @flow
import React, { Component, PropTypes } from 'react';
import CreateTeam from './CreateTeam';
import Team from './Team';
import { selectTeam } from '../../utils';

import css from './Admin.css';

class Admin extends Component {
    static propTypes = {
        createTeam: PropTypes.func.isRequired,
        data: PropTypes.shape({
            loading: PropTypes.bool
        }).isRequired
    }
    constructor() {
        super();
        this.renderTeams = this.renderTeams.bind(this);
        this.createTeam = this.createTeam.bind(this);
        this.state = {
            teamName: '',
            message: null
        };
    }
    createTeam() {
        const { teamName } = this.state;
        const { createTeam } = this.props;
        createTeam(teamName)
            .then(res => console.log(res))
            .catch(err => this.setState({ message: { type: 'error', message: 'shit' } }));
    }
    renderTeams() {
        const { data } = this.props;
        if (data.loading) return <div>LOADING!</div>

        if (data.teams && data.teams.length > 0) {
            return (
                <div>
                    {data.teams.map(team =>
                        <Team
                            team={team}
                            onSelect={() => selectTeam(team.id)}
                            key={team.id}
                        />
                    )}
                </div>
            );
        }

        return <div>You don't have any teams yet</div>
    }
    render() {
        const { teamName } = this.state;
        return (
            <div className={css.container}>
                <CreateTeam
                    onChange={value => this.setState({ teamName: value })}
                    onSubmit={this.createTeam}
                    teamName={teamName}
                />
                <div className={css.teamList}>
                    <h1>Select a team:</h1>
                    {this.renderTeams()}
                </div>
            </div>
        );
    }
}

export default Admin;
