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
        }).isRequired,
        router: PropTypes.shape({
            replace: PropTypes.func.isRequired
        }).isRequired,
        location: PropTypes.shape({
            pathname: PropTypes.string.isRequired
        }).isRequired
    }
    constructor() {
        super();
        this.state = {
            teamName: '',
            message: null
        };
    }
    createTeam = () => {
        const { teamName } = this.state;
        const { createTeam } = this.props;
        createTeam(teamName)
            .then(res => console.log(res))
            .catch(err => this.setState({ message: { type: 'error', message: 'shit' } }));
    }
    selectTeam = (id:Number) => {
        const { router, location } = this.props;
        selectTeam(id);
        router.replace({
            pathname: '/',
            state: { nextPathname: location.pathname }
        });
    }
    renderTeams = () => {
        const { data } = this.props;
        if (data.loading) return <div>LOADING!</div>;

        if (data.teams && data.teams.length > 0) {
            return (
                <div>
                    {data.teams.map(team =>
                        <Team
                            team={team}
                            onSelect={() => this.selectTeam(team.id)}
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
